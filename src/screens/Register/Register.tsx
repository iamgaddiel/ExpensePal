import { IonButton, IonContent, IonIcon, IonInput, IonItem, IonList, IonPage, IonRouterLink, IonSelect, IonSelectOption } from '@ionic/react'
import { mailOutline, lockOpenOutline, personOutline, phonePortraitOutline, maleFemaleOutline } from 'ionicons/icons'


import "../Login/Login.css"

import AuthHeaderSection from '../../components/AuthHeaderSection/AuthHeaderSection'



const Register = () => {
  return (
    <IonPage>
      <IonContent>

        <AuthHeaderSection title={"Register"} />

        <section className="auth_section ion-padding">

          <form action="" className='mt-3'>
            <IonList lines='none'>
              <IonItem>
                <IonIcon icon={personOutline} slot="start" />
                <IonInput type='text' placeholder='Enter name' />
              </IonItem>
              <IonItem className='mt-3'>
                <IonIcon icon={phonePortraitOutline} slot="start" />
                <IonInput type='text' placeholder='Enter phone number' />
              </IonItem>
              <IonItem className='mt-3'>
                <IonIcon icon={mailOutline} slot="start" />
                <IonInput type='password' placeholder='Enter email' />
              </IonItem>
              <IonItem className='mt-3'>
                <IonIcon icon={maleFemaleOutline} slot="start" />
                <IonSelect placeholder='Gender'>
                  <IonSelectOption value={"none"} disabled>None</IonSelectOption>
                  <IonSelectOption value={"male"}>Male</IonSelectOption>
                  <IonSelectOption value={"female"}>Female</IonSelectOption>
                </IonSelect>
              </IonItem>
              <IonItem className='mt-3'>
                <IonIcon icon={lockOpenOutline} slot="start" />
                <IonInput type='password' placeholder='Enter password' />
              </IonItem>
              <IonItem className='mt-3'>
                <IonIcon icon={lockOpenOutline} slot="start" />
                <IonInput type='password' placeholder='Confirm password' />
              </IonItem>
            </IonList>

            <IonButton expand='block' className='fill mt-3' size='large'>
              Continue
            </IonButton>

          </form>


          <div className="text-center mt-5">
            Joined us before? { }
            <IonRouterLink routerDirection='forward' routerLink='/login' className='mt-3'>
              Login
            </IonRouterLink>
          </div>
        </section>


      </IonContent>
    </IonPage>
  )
}

export default Register