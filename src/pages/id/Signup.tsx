import React from 'react'
import { Button } from '../../components/Button'
import { Layout } from '../../components/Layout'

import styles from '../../styles/id/sign.module.css'

const Signup = () => (
  <Layout>
    <div className={styles.prompt}>
      <img
        src="https://cdn.jsdelivr.net/npm/twemoji@11.0.1/2/svg/1f44b.svg"
        alt="👋"
        style={{ width: '64px' }}
      />
      <h1>Welcome to Dot</h1>

      <span className="gap"></span>
      <span className="gap"></span>

      <form>
        <input type="name" placeholder="Name" name="name" />
        <input type="email" name="email" placeholder="me@dothq.co" />
        <input type="password" name="password" placeholder="Password" />
        <input
          type="password"
          name="password_check"
          placeholder="Confirm password"
        />

        <span className="gap"></span>

        <Button type="primary">Sign up</Button>
        <Button type="text" href="/id/login">
          Already have an account? Sign in
        </Button>
      </form>
    </div>
  </Layout>
)

export default Signup
