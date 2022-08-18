import { onDatePickerPage } from "../support/page_objects/datepickerPage"
import { onFormLayoutsPage } from "../support/page_objects/formLayoutsPage"
import { navigateTo } from "../support/page_objects/navigationPage"
import { onSmartTablePage } from "../support/page_objects/smartTablePage"

describe('Test With Page Objects', () => {

    beforeEach('open application', () => {
        cy.openHomePage()
    })

    it('verify navigations across the table', () => {
        navigateTo.formLayoutsPage()
        navigateTo.datePickerPage()
        navigateTo.smartTablePage()
        navigateTo.tooltipPage()
        navigateTo.toasterPage()
    })

    it.only(' should submit Inline and Basic form and select tomorrow date in the calendar', () => {
        navigateTo.formLayoutsPage()
        onFormLayoutsPage.submitInlineFormWithNameAndEmail('Ivan', 'ivan@gmail.com')
        onFormLayoutsPage.submitInlineFormWithEmailAndPassword('Ivan@gmail.com', 'my-password')
        navigateTo.datePickerPage()
        onDatePickerPage.selectCommonDatepickerDateDromToday(1)
        onDatePickerPage.selectDatepickerWithRangeFromToday(7, 14)
        navigateTo.smartTablePage()
        onSmartTablePage.addNewRecordWithFirstAndLastName('Ivan', 'Ivanov')
        onSmartTablePage.updateAgeByFirstName('Ivan', '25')
        onSmartTablePage.deleteRoxByIndex(1)
    })

})