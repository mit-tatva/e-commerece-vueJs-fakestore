import ProductListing from "@/components/Product/ProductListing.vue";
// import { shallowMount } from "@vue/test-utils";
import { mount } from "@vue/test-utils";

describe("ProductListing", () => {
  it("displays data after API call", async () => {
    const wrapper = mount(ProductListing);

    // Wait for the component to update
    await wrapper.vm.$nextTick();

    // Wait for the API call to "complete" (simulated with setTimeout)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Check that the loading message is not displayed
    expect(wrapper.text()).not.toContain("Loading...");

    // Check that the data is displayed
    expect(wrapper.text()).toContain("Mens Casual Slim Fit");
    expect(wrapper.text()).toContain(
      "MBJ Women's Solid Short Sleeve Boat Neck V"
    );
    expect(wrapper.text()).toContain("Opna Women's Short Sleeve Moisture");
    const button = wrapper.find(".btn-primary");
    await button.trigger("click");
    expect(wrapper.text()).toContain("Remove From Cart");
  });
});
