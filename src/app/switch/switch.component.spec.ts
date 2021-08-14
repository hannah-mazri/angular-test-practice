import { SwitchComponent } from './switch.component';

describe('SwitchComponent', () => {
  it('#clicked() should toggle #isOn ', () => {
    const component = new SwitchComponent();
    expect(component.isOn).toBe(false, 'off at first');
    component.clicked();
    expect(component.isOn).toBe(true, 'on after click');
    component.clicked();
    expect(component.isOn).toBe(false, 'off after second click');
  });

  it('#clicked() should set #messgage to "is on"', () => {
    const component = new SwitchComponent();
    expect(component.message).toMatch(/is off/i, 'off at first');
    component.clicked();
    expect(component.message).toMatch(/is on/i, 'on after clicked');
  });
});
