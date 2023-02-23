import { IonButton, IonContent, IonIcon, IonInput, IonItem, IonList, IonPage, IonRouterLink } from '@ionic/react'
import { lockOpenOutline, logoGoogle, mailOutline } from 'ionicons/icons'

import AuthHeaderSection from '../../components/AuthHeaderSection/AuthHeaderSection'
import SpaceBetween from '../../components/style/SpaceBetween'


import "./Login.css"


const Login = () => {
  return (
    <IonPage>
      <IonContent>

      <AuthHeaderSection title='Login' />


        <section className="auth_section ion-padding">

          <form action="" className='mt-5'>
            <IonList lines='none'>
              <IonItem>
                <IonIcon icon={mailOutline} slot="start" />
                <IonInput type='text' placeholder='Enter email' />
              </IonItem>
              <IonItem className='mt-3'>
                <IonIcon icon={lockOpenOutline} slot="start" />
                <IonInput type='password' placeholder='Enter password' />
              </IonItem>
            </IonList>

            <div className="my-4 text-end">
              <IonRouterLink routerDirection='forward' routerLink='/forget-password' className='text-end mt-3'>
                forgoten password?
              </IonRouterLink>
            </div>


            <IonButton expand='block' className='fill mt-3' size='large'>
              Login
            </IonButton>



          </form>

          <SpaceBetween className='my-5'>
            <span className="divider"></span>
            OR
            <span className="divider"></span>
          </SpaceBetween>

          <IonButton expand='block' className='fill mt-3' size='large'>
            <IonIcon icon={logoGoogle} slot='start' />
            login with Google
          </IonButton>

          <div className="text-center mt-5">
            New to ExpensePal? { }
            <IonRouterLink routerDirection='forward' routerLink='/register' className='mt-3'>
              Register
            </IonRouterLink>
          </div>
        </section>

      </IonContent>
    </IonPage>
  )
}

export default Login