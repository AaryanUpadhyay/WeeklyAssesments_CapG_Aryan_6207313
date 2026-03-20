import { expect } from "@playwright/test"
import ticketData from "../utility/ticket.json"
class Create{
    page:any
    url: string
    sub : string
    task: any
    prior : any
    desc : any
    clear: any
    submit : any
    successMsg: any
    constructor(page){
        this.page = page
        this.url = page.goto("http://49.249.28.218:8081/TestServer/Build/Small_CRM/create-ticket.php")
        this.sub = page.locator('#subject')
        this.task = page.locator('//select[@name="tasktype"]')
        this.prior = page.locator('//select[@name="priority"]')
        this.desc = page.locator('//textarea[@name="description"]')
        this.clear = page.locator('.btn.btn-default')
        this.submit = page.locator('.btn.btn-primary.pull-right')
        this.successMsg = page.locator("text=Ticket Generated");
    }
    async navigateUrl(){
        await this.url
    }
    async CreateTicket(){
        await this.sub.fill(ticketData.subject);
        await this.task.selectOption({ label: ticketData.taskType });
        await this.prior.selectOption({ label: ticketData.priority });
        await this.desc.fill(ticketData.Description);
        await this.page.screenshot({path:"create.png"})
        if (this.submit) {
        const dialogPromise = this.page.waitForEvent('dialog');
        await this.submit.click();

        const dialog = await dialogPromise;
        await expect(dialog.message()).toContain("Ticket");

        await dialog.accept();
    }
        
    }

}
export default Create