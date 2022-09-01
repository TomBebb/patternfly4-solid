import { Component, createSignal } from 'solid-js';

import {
  Toolbar, ToolbarContent, ToolbarItem,
  Masthead, MastheadBrand, MastheadContent, MastheadMain, MastheadToggle,

  Page, PageToggleButton, Title, Checkbox, Tabs, Label, Input, TextArea, List, ListItem, OrderType, Caption, TableComposable, Tbody, Td, Thead, Tr, Th
} from '.';
import { HelperText } from './HelperText/HelperText';
import { HelperTextItem } from './HelperText/HelperTextItem';


interface Repository {
  name: string;
  branches: string | null;
  prs: string | null;
  workspaces: string;
  lastCommit: string;
}


type ExampleType = 'default' | 'compact' | 'compactBorderless';


export const ComposableTableBasic: Component = () => {
  // In real usage, this data would come from some external source like an API via props.
  const repositories: Repository[] = [
    { name: 'one', branches: 'two', prs: 'three', workspaces: 'four', lastCommit: 'five' },
    { name: 'one - 2', branches: null, prs: null, workspaces: 'four - 2', lastCommit: 'five - 2' },
    { name: 'one - 3', branches: 'two - 3', prs: 'three - 3', workspaces: 'four - 3', lastCommit: 'five - 3' }
  ];

  const columnNames = {
    name: 'Repositories',
    branches: 'Branches',
    prs: 'Pull requests',
    workspaces: 'Workspaces',
    lastCommit: 'Last commit'
  };

  // This state is just for the ToggleGroup in this example and isn't necessary for TableComposable usage.
  const [exampleChoice, setExampleChoice] = createSignal<ExampleType>('default');
  const onExampleTypeChange = (_isSelected: boolean, event: Event) => {
    const id = event.currentTarget.id;
    setExampleChoice(id as ExampleType);
  };

  return (
      <TableComposable
        aria-label="Simple table"
        variant={exampleChoice() !== 'default' ? 'compact' : undefined}
        borders={exampleChoice() !== 'compactBorderless'}
      >
        <Caption>Simple table using composable components</Caption>
        <Thead>
          <Tr>
            <Th>{columnNames.name}</Th>
            <Th>{columnNames.branches}</Th>
            <Th>{columnNames.prs}</Th>
            <Th>{columnNames.workspaces}</Th>
            <Th>{columnNames.lastCommit}</Th>
          </Tr>
        </Thead>
        <Tbody>
          {repositories.map(repo => (
            <Tr key={repo.name}>
              <Td dataLabel={columnNames.name}>{repo.name}</Td>
              <Td dataLabel={columnNames.branches}>{repo.branches}</Td>
              <Td dataLabel={columnNames.prs}>{repo.prs}</Td>
              <Td dataLabel={columnNames.workspaces}>{repo.workspaces}</Td>
              <Td dataLabel={columnNames.lastCommit}>{repo.lastCommit}</Td>
            </Tr>
          ))}
        </Tbody>
      </TableComposable>
  );
};

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
  const [currentTab, setCurrentTab] = createSignal(0);
  const [email, setEmail] = createSignal('top');
  return (
    <Page header={header} sidebar={sidebar}>
      <Tabs
        activeKey={currentTab()}
        onSelect={setCurrentTab}
        tabs={[
          {
            title: 'Form',
            content: <div>

              <Checkbox
                description='Desc'
                label="Child CheckBox 2"
                checked={true}
              />

              <Input placeholder='Email' value={email()} onChange={setEmail} />
              <TextArea placeholder='Email' value={email()} onChange={setEmail} canResizeVertical />
            </div>
          },
          {
            title: 'Typography',
            content: <div>
              <Title headingLevel='h1' >H1</Title>
              <Title headingLevel='h2' >H2</Title>
              <Title headingLevel='h3' >H3</Title>

              <Label>Label</Label>
              <Label isCompact>Label (compact)  </Label>
            </div>
          },
          {
            title: 'Helpers',
            content: <div>
              <HelperText >
                <HelperTextItem hasIcon>Default</HelperTextItem>
                <HelperTextItem variant='error' hasIcon>Error</HelperTextItem>
                <HelperTextItem variant='warning' hasIcon>Warning</HelperTextItem>
                <HelperTextItem variant='indeterminate' hasIcon>Indeterminate</HelperTextItem>
                <HelperTextItem variant='success' hasIcon>Success</HelperTextItem>
              </HelperText>
            </div>
          },
          {
            title: 'Lists',
            content:   <List type={OrderType.Number}  isBordered>
            <ListItem>First</ListItem>
            <ListItem>Second</ListItem>
            <ListItem>Third</ListItem>
          </List>
          },
          {
            title: 'Table',
            content: <ComposableTableBasic/>
          }
        ]}
      />
    </Page>
  );
};

export default App;
