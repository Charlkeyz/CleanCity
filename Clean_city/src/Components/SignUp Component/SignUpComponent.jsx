import styles from './SignUpComponent.module.css'
const SignUpComponent = () => {
  return (
    <main className={styles.input_form}>
        <section>
            <h1>Create your account</h1>
            <p>Already have an account? <span>Log in</span> </p>
        </section>
        <form action="">
            <input type="text" placeholder="First name"/>
            <input type="text" placeholder="Last name" />
            <input type="email" placeholder="Email address"/>
            <input type="password" placeholder="Choose password"/>
        </form>
    </main>
  )
}
export default SignUpComponent
