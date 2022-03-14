/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-unnecessary-act */
import { ApiData, weather } from "./apiData";
import { act } from "react-dom/test-utils";
import { unmountComponentAtNode, render } from "react-dom";

let container: HTMLDivElement | null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  if (container) {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  }
});

it("renders weather data", async () => {
  const fakeData: weather[] = [
    {
      date: new Date(),
      temperatureC: 45,
      summary: "Mild",
    },
  ];

  jest.spyOn(global, "fetch").mockImplementation(
    () =>
      Promise.resolve({
        json: () => Promise.resolve(fakeData),
      }) as any
  );

  await act(async () => {
    render(<ApiData />, container);
  });

  expect(container?.querySelectorAll("li").length).toBe(1);

  (global.fetch as unknown as jest.SpyInstance).mockRestore();
});
