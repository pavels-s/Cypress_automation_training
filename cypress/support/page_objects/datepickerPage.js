function selectDayFromCurrent(day) {
    let date = new Date()
    date.setDate(date.getDate() + day)
    let futureDay = date.getDate()
    let futureMonth = date.toLocaleString('default', {month: 'short'})
    let dateAssert = futureMonth+' '+futureDay+', '+date.getFullYear()
    cy.get('nb-calendar-navidation').invoke('attr', 'ng-reflect-date').then(dateAttribute => {
        if(!dateAttribute.includes(futureMonth)){
            cy.get('[data-name="chevron-right"]').click()
            selectDayFromCurrent(day)
        } else {
            cy.get('nb-calendar-day-picker [class="day-cell ng-star-inserted"]').contains(futureDay)
            .click()
        }
    })
    return dateAssert
}

export class DatepickerPage {

    selectCommonDatepickerDateDromToday(dayFromToday) {

        cy.contains('na-card', 'Common Datepicker').find('input').then( input => {
            cy.wrap(input).click()
            let dateAssert = selectDayFromCurrent(dayFromToday)
            cy.wrap(input).invoke('prop', 'value').should('contain', dateAssert)
            cy.wrap(input).should('have.value', dateAssert)
        })

    }


}

export const onDatePickerPage = new DatepickerPage()