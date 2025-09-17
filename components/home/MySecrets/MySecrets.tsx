import React from 'react'
import { navigationStore } from '@/store'
import { MySecretsNav } from '@/types'
import NewSecret from './NewSecret'
import AllSecrets from './AllSecrets'

export default function MySecrets() {
  const {mySecretsNav} = navigationStore();

  const getView = () => {
    switch(mySecretsNav) {
      case MySecretsNav.ALL:
        return <AllSecrets />;
      case MySecretsNav.NEW:
        return <NewSecret />;
      default:
        return <AllSecrets />;
    }
  }

  return getView();
}
