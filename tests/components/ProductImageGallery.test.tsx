import { render, screen } from '@testing-library/react'
import ProductImageGallery from '../../src/components/ProductImageGallery'

describe('ProductImageGallery', () => {
    it('it should not render anything when the imageurl array is empty', () => {
        const {container} = render(<ProductImageGallery imageUrls={[]} />)
        expect(container).toBeEmptyDOMElement();
    })

    it('it should render a list of images', () => {
        const imageUrls: string[] = ["url1", "url2"];
        render(<ProductImageGallery imageUrls={imageUrls} />)
        const images = screen.getAllByRole('img');
        expect(images).toHaveLength(2);
        imageUrls.forEach((url, index) => {
            expect(images[index]).toHaveAttribute('src', url)
        })
        
    })
})