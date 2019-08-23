import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let comp: AppComponent;
  let fixture_form:  ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents().then(() => {
      fixture_form = TestBed.createComponent(AppComponent);
      comp = fixture_form.componentInstance;

      de = fixture_form.debugElement.query(By.css('form'));
      el = de.nativeElement;

    });
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'todo-app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('todo-app');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to todo-app!');
  }));

  it('should call the addTodo method' , async(() =>{
    // expect(true).toBe(true);
    fixture_form.detectChanges();
    spyOn(comp, 'addTodo');
    el = fixture_form.debugElement.query(By.css('span.add-btn')).nativeElement;
    el.click();
    expect(comp.addTodo).toHaveBeenCalledTimes(1);
  } ));


});
