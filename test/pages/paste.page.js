import BasePage from "./base.page.js"

class PasteBin extends BasePage {
    open() {return super.open("https://pastebin.com/") }

    //For I Can Win test
    get inputValue() { return "Hello from WebDriver" }
    get author(){ return "helloweb" }
    get inputArea() { return $("#postform-text") } 
    get dropdownExpiration() { return $('#select2-postform-expiration-container') }
    get tenMinutes() { return $("//li[text() = '10 Minutes']") }
    get pasteName() { return $("#postform-name") }
    get submit() { return $("button.btn.-big") }
    get result() { return $(".de1") } 
    //For Bring it on test
    get codeLine() {
        return 'git config --global user.name "New Sheriff in Town"\ngit reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code"\ngit push origin master --force'
    }
    get inputText() { return $('#postform-text') }
    get syntax() { return $("#select2-postform-format-container") }
    get bash() { return $("//li[text()='Bash']") }
    get inputAuthor() { return  "how to gain dominance among developers" }   
    get setSyntax() { return $("//a[text()='Bash']") }
    get setProgrammingLanguage() { return 'Bash' }
    get textArea() { return $('div.source')}
    
}
export default new PasteBin()