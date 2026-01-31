class OnBoardPage
{
    selectorsList()
    {
        const selectors={
            title: '[data-test="user-onboarding-dialog-title"]',
            content: '[data-test="user-onboarding-dialog-content"]',
            nextButton: '[data-test="user-onboarding-next"]',
            bankName:'[id="bankaccount-bankName-input"]',
            routingNumber: '[id="bankaccount-routingNumber-input"]',
            accountNumber: '[id="bankaccount-accountNumber-input"]',
            saveButton:'[data-test="bankaccount-submit"]',
            doneButton: '[data-test="user-onboarding-next"]'
        }
        return selectors
    }


}
export default OnBoardPage