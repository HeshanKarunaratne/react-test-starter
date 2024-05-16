import { render, screen } from '@testing-library/react'
import UserAccount from '../../src/components/UserAccount'
import { User } from '../../src/entities'

describe('UserAccount', () => {
    it('should render name when name is provided', () => {
        const user: User = { id: 1, name: 'heshan' }
        render(<UserAccount user={user} />)
        expect(screen.getByText(user.name)).toBeInTheDocument()
    })

    it('should render button when user is an admin', () => {
        const user: User = { id: 1, name: 'heshan', isAdmin: true }
        render(<UserAccount user={user} />)
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument()
        expect(button).toHaveTextContent(/edit/i);
    })

    it('should not render button when user is not an admin', () => {
        const user: User = { id: 1, name: 'heshan' }
        render(<UserAccount user={user} />)
        const button = screen.queryByRole('button');
        expect(button).not.toBeInTheDocument()
    })
})