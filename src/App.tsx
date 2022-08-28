import { Component, createEffect, createSignal } from 'solid-js';
import Hint from './Hint';
import HintBody from './HintBody';
import HintFooter from './HintFooter';
import HintTitle from './HintTitle';
import TextContent from './TextContent';

import Title from './Title';
import Tooltip from './Tooltip';
import Button from './Button';
import Label from './Label';
import Select from './Select';
import Wizard, { WizardHeader } from './Wizard';
import Toolbar from './Toolbar/Toolbar';
import ToolbarContent from './Toolbar/ToolbarContent';
import ToolbarItem from './Toolbar/ToolbarItem';
import { Masthead, MastheadBrand, MastheadContent, MastheadMain, MastheadToggle } from './Masthead';
import PageToggleButton from './Page/PageToggleButton';
import Page from './Page/Page';

const App: Component = () => {
  
  const [isNavOpen, setIsNavOpen] = createSignal(true);
  
  const onNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  
  const headerToolbar = (
    <Toolbar>
      <ToolbarContent>
        <ToolbarItem>header-tools</ToolbarItem>
      </ToolbarContent>
    </Toolbar>
  );
  const sidebar = <div>Sidebar</div>


  const header = (
    <Masthead>
      <MastheadToggle>
        <PageToggleButton
          variant="plain"
          aria-label="Global navigation"
          isNavOpen={isNavOpen()}
          onNavToggle={onNavToggle}
        >
          Bars
        </PageToggleButton>
      </MastheadToggle>
      <MastheadMain>
        <MastheadBrand href="https://patternfly.org" target="_blank">
          Logo
        </MastheadBrand>
      </MastheadMain>
      <MastheadContent>{headerToolbar}</MastheadContent>
    </Masthead>
  );
  return (
    <Page header={header} sidebar={sidebar}>
      <PageSection variant={PageSectionVariants.darker}>Section with darker background</PageSection>
      <PageSection variant={PageSectionVariants.dark}>Section with dark background</PageSection>
      <PageSection variant={PageSectionVariants.light}>Section with light background</PageSection>
    </Page>
  );
};

export default App;
