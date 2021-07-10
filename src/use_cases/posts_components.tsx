import {
    Heading,
    Text,
    UnorderedList,
    ListItem,
    Code,
    Divider,
} from '@chakra-ui/layout'
import {
    NormalComponents,
    SpecialComponents,
} from 'react-markdown/src/ast-to-react'
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react'

export class PostsComponents {
    static components(): Partial<NormalComponents & SpecialComponents> {
        return {
            h1: ({ children }) => PostsComponents.h1(children),
            h2: ({ children }) => PostsComponents.h2(children),
            h3: ({ children }) => PostsComponents.h3(children),
            h4: ({ children }) => PostsComponents.h4(children),
            h5: ({ children }) => PostsComponents.h5(children),
            h6: ({ children }) => PostsComponents.h6(children),
            p: ({ children }) => PostsComponents.p(children),
            ul: ({ children }) => PostsComponents.ul(children),
            li: ({ children }) => PostsComponents.li(children),
            code: ({ children }) => PostsComponents.code(children),
            table: ({ children }) => PostsComponents.table(children),
            thead: ({ children }) => PostsComponents.thead(children),
            tbody: ({ children }) => PostsComponents.tbody(children),
            tr: ({ children }) => PostsComponents.tr(children),
            th: ({ children }) => PostsComponents.th(children),
            td: ({ children }) => PostsComponents.td(children),
            hr: () => PostsComponents.hr(),
        }
    }

    static h1(children: React.ReactNode[]) {
        return (
            <Heading fontSize='36px' as='h1' margin='3'>
                {children}
            </Heading>
        )
    }

    static h2(children: React.ReactNode[]) {
        return (
            <Heading as='h2' fontSize='30px' margin='3'>
                {children}
            </Heading>
        )
    }

    static h3(children: React.ReactNode[]) {
        return (
            <Heading as='h3' fontSize='24px' margin='3'>
                {children}
            </Heading>
        )
    }

    static h4(children: React.ReactNode[]) {
        return (
            <Heading as='h4' fontSize='18px' margin='3'>
                {children}
            </Heading>
        )
    }

    static h5(children: React.ReactNode[]) {
        return (
            <Heading as='h5' fontSize='14px' margin='3'>
                {children}
            </Heading>
        )
    }

    static h6(children: React.ReactNode[]) {
        return (
            <Heading as='h6' fontSize='12px' margin='3'>
                {children}
            </Heading>
        )
    }

    static p(children: React.ReactNode[]) {
        return (
            <Text as='p' margin='3'>
                {children}
            </Text>
        )
    }

    static ul(children: React.ReactNode[]) {
        return (
            <UnorderedList as='ul' margin='3'>
                {children}
            </UnorderedList>
        )
    }

    static li(children: React.ReactNode[]) {
        return (
            <ListItem as='li' margin='3'>
                {children}
            </ListItem>
        )
    }

    static code(children: React.ReactNode[]) {
        return <Code className='article-code'>{children}</Code>
    }

    static hr() {
        return <Divider m='4px' />
    }

    static table(children: React.ReactNode[]) {
        return <Table>{children}</Table>
    }

    static thead(children: React.ReactNode[]) {
        return <Thead>{children}</Thead>
    }

    static tbody(children: React.ReactNode[]) {
        return <Tbody>{children}</Tbody>
    }

    static tr(children: React.ReactNode[]) {
        return <Tr>{children}</Tr>
    }

    static th(children: React.ReactNode[]) {
        return <Th>{children}</Th>
    }

    static td(children: React.ReactNode[]) {
        return <Td>{children}</Td>
    }
}
