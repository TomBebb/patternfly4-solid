import { Component, createSignal } from "solid-js";
import { createStore } from "solid-js/store";
import { TableComposable, Caption, Thead, Tr, Th, Tbody, Td } from "../Table";

interface Repository {
    name: string;
    branches: string | null;
    prs: string | null;
    workspaces: string;
    lastCommit: string;
  }
  
  
  type ExampleType = 'default' | 'compact' | 'compactBorderless';
  
  
  export const TableDemo: Component = () => {
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
  
  