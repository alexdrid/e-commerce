import React from 'react'
import { Footer as FlowbiteFooter } from 'flowbite-react'

export const Footer = () => {
    return (
        <FlowbiteFooter container={true}>
            <div className="w-full text-center">
                <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                    <FlowbiteFooter.Brand
                        href="https://flowbite.com"
                        src="https://flowbite.com/docs/images/logo.svg"
                        alt="Flowbite Logo"
                        name="Flowbite"
                    />
                    <FlowbiteFooter.LinkGroup>
                        <FlowbiteFooter.Link href="#">
                            About
                        </FlowbiteFooter.Link>
                        <FlowbiteFooter.Link href="#">
                            Privacy Policy
                        </FlowbiteFooter.Link>
                        <FlowbiteFooter.Link href="#">
                            Licensing
                        </FlowbiteFooter.Link>
                        <FlowbiteFooter.Link href="#">
                            Contact
                        </FlowbiteFooter.Link>
                    </FlowbiteFooter.LinkGroup>
                </div>
                <FlowbiteFooter.Divider />
                <FlowbiteFooter.Copyright
                    href="#"
                    by="Flowbite™"
                    year={2022}
                />
            </div>
        </FlowbiteFooter>
    )
}

export default Footer