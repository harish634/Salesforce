import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavigationTrial extends NavigationMixin(LightningElement) {

    handleButtonChange(){

        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'new'
            }
        });

        this[NavigationMixin.Navigate] ({
            type: 'standard__objectPage',
            attributes : {
                objectApiName : 'Account',
                actionName : 'home'
            }
           
        })
    }

    handleAccountPage(){
        // this[NavigationMixin.Navigate] ({
        //     type: 'standard__objectPage',
        //     attributes : {
        //         objectApiName : 'Account',
        //         actionName : 'home'
        //     }
           
        // })


        // this is to navigate for record Page
        this[NavigationMixin.Navigate] ({
            type: 'standard__recordPage',
            attributes : {
                recordId : '0015g00001PdJmuAAF',
                objectApiName : 'Boat__c',
                actionName : 'view'
            }
           
        })
    
    }
}