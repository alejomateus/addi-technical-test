import { TestBed } from "@angular/core/testing";
import { ModalService } from "./modal.service";
describe("ModalService", () => {
  let service: ModalService;
  const modal1 = {
    id: "modal1",
    title: "Modal",
    open() {
      return;
    },
    close() {
      return;
    },
  };
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should be add", () => {
    service.add(modal1);
    expect(service.modals).toEqual([modal1]);
  });

  it("should be remove", () => {
    service.modals = [modal1];
    service.remove("modal1");
    expect(service.modals).toEqual([]);
  });

  it("should be open", () => {
    service.add(modal1);
    service.open("modal1");
    expect(service).toBeTruthy();
  });

  it("should be close", () => {
    service.add(modal1);
    service.close("modal1", false);
    expect(service).toBeTruthy();
  });
});
