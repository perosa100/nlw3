import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Landing from './pages/Landing/index'
import OrphanagesMap from './pages/OrphanagesMap'
import CreateOrphanage from './pages/CreateOrphanage/CreateOrphanage'
import Orphanage from './pages/Orphanage/Orphanage'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" exact component={OrphanagesMap} />
        <Route path="/orphanages/create" exact component={CreateOrphanage} />
        <Route path="/orphanages/:id" exact component={Orphanage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
