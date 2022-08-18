import { onDatePickerPage } from "../support/page_objects/datepickerPage"
import { onFormLayoutsPage } from "../support/page_objects/formLayoutsPage"
import { navigateTo } from "../support/page_objects/navigationPage"

describe('Test With Page Objects', () => {

    beforeEach('open application', () => {
        cy.visit('/')
    })

    it('verify navigations across the table', () => {
        navigateTo.formLayoutsPage()
        navigateTo.datePickerPage()
        navigateTo.smartTablePage()
        navigateTo.tooltipPage()
        navigateTo.toasterPage()
    })

    it(' should submit Inline and Basic form and select tomorrow date in the calendar', () => {
        navigateTo.formLayoutsPage()
        onFormLayoutsPage.submitInlineFormWithNameAndEmail('Ivan', 'ivan@email.com')
        onFormLayoutsPage.submitInlineFormWithEmailAndPassword('Ivan@email.com', 'my-password')
        navigateTo.datePickerPage()
        onDatePickerPage.selectCommonDatepickerDateDromToday(1)
    })

})