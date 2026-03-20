class View{
    url : string
    open: any
    constructor(page){
        this.url = page.goto('http://49.249.28.218:8081/TestServer/Build/Small_CRM/view-tickets.php')
        this.open = page.locator('.label.label-important')
    }
    async navigateUrl(){
        await this.url
    }
    async viewFirstTicket(){
        await this.open.first().click()
    }
}
export default View