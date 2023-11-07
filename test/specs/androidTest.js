describe("Android Tests", () => {
  it("Find element by accessibility id", async () => {
    const item = await $(
      "~Ervin Howell, Shanna@melissa.tv, 010-692-6593 x09125, anastasia.net"
    );
    await item.click();
    await driver.pause(1500);

    const checkItem = await $(
      'android=new UiSelector().text("Ervin Howell")'
    );
    await expect(checkItem).toBeExisting();
  });

  it("Find element by class name", async () => {
    await driver.pause(1500);

    const className = await $("android.widget.TextView");
    await expect(className).toHaveText("Detail User");
  });

  it("Press back to go back", async () => {
    const backItem = await $("~Back");
    await backItem.click();
    await driver.pause(1500);

    const className = await $("android.widget.TextView");
    await expect(className).toHaveText("List User");
  });

  it("Search by name test", async () => {
    const searchInput = await $("android.widget.EditText");
    await searchInput.addValue("Glenna Reichert");
    await driver.pause(1500);

    const checkItem = await $(
      'android=new UiSelector().text("Glenna Reichert")'
    );
    await expect(checkItem).toBeExisting();
  });

  it("Clear search value", async () => {
    const searchInput = await $("android.widget.EditText");
    await searchInput.clearValue();
    await driver.pause(1500);

    const checkItem = await $('android=new UiSelector().text("Leanne Graham")');
    await expect(checkItem).toBeExisting();
  });
});
