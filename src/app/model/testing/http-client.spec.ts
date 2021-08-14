import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';

interface Data {
  name: string;
}

const testUrl = '/data';

describe('HttpClient testing', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('can test HttpClient.get', () => {
    const testData: Data = {name: 'Test Data'};

    httpClient.get<Data>(testUrl)
      .subscribe(data => {
          expect(data).toEqual(testData);
        }
      );

    const req = httpTestingController.expectOne('/data');

    expect(req.request.method).toEqual('GET');

    req.flush(testData);

    httpTestingController.verify();
  });
});
