describe("Practical task", () =>{
    // it("I Can Win", async () =>{
    //     await browser.url("https://pastebin.com/")
    //     let inputValue = 'Hello from WebDriver'
    //     const inputArea = await $("#postform-text").setValue(inputValue)
    //     const dropdownExpiration = await $('#select2-postform-expiration-container').click()
    //     const tenMinutes = await $("/html/body/span[2]/span/span[2]/ul/li[3]").click()
    //     const pasteName = await $("#postform-name").setValue("helloweb")
    //     const submit = await $("button.btn.-big").click()
    //     const result = await $(".de1")
    //     await expect(result).toHaveText(inputValue)

    // })

    it("Bring it on", async () =>{
        await browser.url("https://pastebin.com/")
        let codeLine = 'git config --global user.name "New Sheriff in Town"\ngit reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code"\ngit push origin master --force'
        const inputText = await $('#postform-text')
        inputText.setValue(codeLine)


        const syntax = await $("#select2-postform-format-container")
        syntax.click()
        const bash = await $("/html/body/span[2]/span/span[2]/ul/li[2]/ul/li[1]").click()
        const dropdownExpiration = await $('#select2-postform-expiration-container')
        dropdownExpiration.click()
        const tenMinutes = await $("/html/body/span[2]/span/span[2]/ul/li[3]").click()
        await $('#postform-name').setValue("how to gain dominance among developers")
        const submit = await $("button.btn.-big")
        submit.click()
        const setSyntax = await $("//a[text()='Bash']")
        await expect(setSyntax).toHaveText('Bash')



    })
})