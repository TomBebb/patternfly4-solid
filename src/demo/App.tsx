import { Component, createEffect, createSignal, JSXElement } from 'solid-js';
import {
  Toolbar, ToolbarContent, ToolbarItem,
  Masthead, MastheadBrand, MastheadContent, MastheadMain, MastheadToggle,
  HelperText, HelperTextItem,
  Page, PageToggleButton, Title, Checkbox, Tabs, Label, Input, TextArea, List, ListItem, OrderType, Caption, TableComposable, Tbody, Td, Thead, Tr, Th, ToggleGroup, Spinner, Slider, Button, AboutModal, Accordion, Wizard, Form, FieldGroupExpandable, FormFieldGroupHeader, FormGroup
} from '..';
import { TableDemo } from './TableDemo';
import { Set } from 'immutable';
import { createSign } from 'crypto';

const App: Component = () => {

  const [isNavOpen, setIsNavOpen] = createSignal(false);

  const onNavToggle = () => {
    console.log('navtoggle')
    setIsNavOpen(!isNavOpen());
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
  const [sliderVal, setSliderVal] = createSignal(50);
  createEffect(() => console.log('sliderVal', sliderVal()))

  const [showAbout, setShowAbout] = createSignal(false);
  const [email, setEmail] = createSignal('top');
  const [items, setItems] = createSignal<Set<string>>(Set(['undo']));

  interface Item {
    key: string
    value: string
    content: JSXElement
  }

  const [selectedItems, setSelectedItems] = createSignal<Set<string>>(Set());
  const value = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie lorem lacinia dolor aliquet faucibus. Suspendisse gravida imperdiet accumsan. Aenean auctor lorem justo, vitae tincidunt enim blandit vel. Aenean quis tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  const AccordionDemo = <Accordion<Item, string>
    getKey={v => v.key}
    itemContent={(props) => <>{props.item.content}</>}
    itemToggle={(props) => <>{props.item.value}</>}
    items={[{
      content: 'Item one',
      key: '1',
      value
    },

    {
      content: 'Item two',
      key: '2',
      value

    }
    ]}
    selected={selectedItems()}
    setSelected={setSelectedItems}
  />;
  const [formDemoName, setFormDemoName] = createSignal("Tom");
  const [formDemoEmail, setFormDemoEmail] = createSignal("Tom@gmail.com");
  const [formDemoUserDetails, setFormDemoUserDetails] = createSignal(false);
  return (
    <Page header={header} sidebar={sidebar} showSidebar={isNavOpen()}>
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


              <Form>
                <FieldGroupExpandable isExpanded={formDemoUserDetails()} setExpanded={setFormDemoUserDetails} header={<FormFieldGroupHeader titleText="Hello, world" titleDescription=<div>Desc</div> />}>

                  <FormGroup label="Name" isRequired>
                    <Input value={formDemoName()} onChange={setFormDemoName} />
                  </FormGroup>
                  <FormGroup label="Email" isRequired>
                    <Input value={formDemoEmail()} onChange={setFormDemoEmail} />
                  </FormGroup>
                </FieldGroupExpandable>
              </Form>
            </div>
          },
          {
            title: 'Accordion',
            content: AccordionDemo
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
            title: 'Wizards',
            content: <div>
              <Wizard steps={[
                {
                  name: 'Configure',
                  component: <div>
                    Configuring
                  </div>
                },
                {
                  name: 'Setup',
                  component: <div>
                    Setting Up
                  </div>
                },
                {
                  name: 'Install',
                  component: <div>
                    Installing!
                  </div>
                },
              ]} >
              </Wizard>
            </div>
          },
          {
            title: 'About Modal',
            content: <div>
              <Button variant='primary' onClick={() => setShowAbout(true)}>Show about</Button>
              <AboutModal isOpen={showAbout()} productName='My Product'
                brandImageSrc='https://www.patternfly.org/v4/images/brandImg.cd87f4d68dcba8304cf9e3192715322f.svg'
                onClose={() => setShowAbout(false)}
                trademark='Trademark and copyright information here'>

                MyPBXTOols
              </AboutModal>
            </div>
          },
          {
            title: 'Lists',
            content: <List type={OrderType.Number} isBordered>
              <ListItem>First</ListItem>
              <ListItem>Second</ListItem>
              <ListItem>Third</ListItem>
            </List>
          },
          {
            title: 'Table',
            content: <TableDemo />
          },
          {
            title: 'Slider',
            content: <div>
              <div>{sliderVal()}</div>
              <Slider step={4} value={sliderVal()} onChange={v => {
                console.log('sliderVal change App', v);
                setSliderVal(v);
              }} customSteps={[
                {
                  label: '0px',
                  value: 0
                }, {
                  label: '10px',
                  value: 10
                }, {
                  label: '50px',
                  value: 50
                }
              ]} /></div>
          },
          {
            title: 'Spinner',
            content: <div>
              <Spinner />
              <Spinner size='md' />
              <Spinner size='lg' />
              <Spinner size='xl' />
            </div>
          },
          {
            title: 'Toggle Group',
            content: <ToggleGroup<string> items={[
              {
                key: 'copy',
                text: 'Copy',
                icon: <i class="fa-solid fa-copy"></i>
              },
              {
                key: 'undo',
                text: 'Undo',
                icon: <i class="fa-solid fa-rotate-left"></i>
              },
              {
                key: 'share',
                text: 'Share',
                icon: <i class="fa-solid fa-rotate-right"></i>
              },
            ]}
              hasItem={v => items()?.includes(v)}
              setItem={(k, v) => {
                if (v) {
                  setItems(items().add(k));
                } else {
                  setItems(items().remove(k))
                }
              }}
            />

          }
        ]}
      />
    </Page>
  );
};

export default App;
