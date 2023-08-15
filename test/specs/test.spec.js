import PasteBin from "../pages/paste.page.js";
describe("Practical task", () =>{

    it("I Can Win", async () =>{
        await PasteBin.open()
        await PasteBin.inputArea.setValue(PasteBin.inputValue)
        await PasteBin.dropdownExpiration.click()
        await PasteBin.tenMinutes.click()
        await PasteBin.pasteName.setValue(PasteBin.author)
        await PasteBin.submit.click()
        await expect(PasteBin.result).toHaveText(PasteBin.inputValue)
        
    })

    it("Bring it on", async () =>{
        await PasteBin.open()
        await PasteBin.inputText.setValue(PasteBin.codeLine)
        await PasteBin.syntax.click()
        await PasteBin.bash.click()
        await PasteBin.dropdownExpiration.click()
        await PasteBin.tenMinutes.click()
        await PasteBin.pasteName.setValue(PasteBin.inputAuthor)
        await PasteBin.submit.click()
        await expect(PasteBin.setSyntax).toHaveText(PasteBin.setProgrammingLanguage)
        await expect(PasteBin.textArea).toHaveText(PasteBin.codeLine)



    })
})