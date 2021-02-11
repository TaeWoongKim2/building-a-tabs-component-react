import React from "react";

import Tabs, { Tab, TabContent } from './components/Tabs';

function App() {
  return (
    <>
      <h1>Tabs Demo</h1>
      <Tabs>
        <Tab label="Gator">
          <TabContent>
            See ya later, <em>Alligator</em>!
          </TabContent>
        </Tab>
        <Tab label="Croc">
          <TabContent>
            After 'while, <em>Crocodile</em>!
          </TabContent>
        </Tab>
        <Tab label="Sarcosuchus">
          <TabContent>
            Nothing to see here, this tab is <em>extinct</em>!
          </TabContent>
        </Tab>
      </Tabs>
    </>
  );
}

export default App;
