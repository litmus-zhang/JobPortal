import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, FormControl, FormLabel, Input, Button, useToast, FormHelperText } from '@chakra-ui/react'
import { ApplicationStyle } from '../styles'

interface Props { }

function Application(props: Props) {
    const { } = props
    const toast = useToast()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        //send form data to backend
        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData.entries())
        console.log(data);

        toast({
            title: 'Application Submitted',
            description: 'Your application has been submitted successfully',
            status: 'success',
            duration: 5000,
            isClosable: true,
        })

        //reset form field
        console.log(e.currentTarget.nodeValue);

        e.currentTarget.reset()

    }

    return (
        <div className={ApplicationStyle}>
            <Tabs isFitted variant={'solid-rounded'} >
                <TabList>
                    <Tab>Job Overview</Tab>
                    <Tab>Apply</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <strong>Overview</strong> <br />
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod dolore quasi fugiat pariatur ab tenetur commodi recusandae ratione culpa, ea incidunt, ullam quaerat quo fuga itaque est perferendis qui. Temporibus.
                        <br />
                        <strong>Job Details</strong>
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam neque repudiandae velit hic. Enim, modi sunt? Consequatur obcaecati, accusantium aspernatur possimus provident quam exercitationem cumque recusandae ipsa, voluptatem illum totam voluptatibus praesentium temporibus officiis dolor, doloremque nobis maxime! Reiciendis aliquid cum eveniet a? Ipsum officiis aperiam illum, hic veritatis reiciendis eveniet similique repellendus ad necessitatibus ut laudantium tempora eius pariatur rerum vel architecto culpa! Facere eveniet impedit voluptate, at autem ea hic dolore repudiandae. Qui dolor iusto minus perferendis? Doloremque aut quam culpa deleniti est aperiam ducimus explicabo iste excepturi iusto, nostrum eligendi fuga. Maiores, dolorem excepturi nam animi sapiente iste quidem alias neque quod qui adipisci distinctio quaerat recusandae ea eveniet omnis necessitatibus laborum numquam culpa eum voluptatibus aperiam in ipsam? Non nostrum voluptatem officia illo rem odit officiis reiciendis aspernatur tenetur eligendi doloremque, sunt est minima esse reprehenderit cumque dolorem, numquam laudantium necessitatibus! Unde ipsum ex natus atque tenetur repudiandae perspiciatis quam est dolores repellendus sequi nobis assumenda eaque, commodi sed in tempora vero maxime iste ut. Exercitationem in facer
                    </TabPanel>
                    <TabPanel>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                            <FormControl isRequired>
                                <FormLabel htmlFor="name">Full Name</FormLabel>
                                <Input name='fullname' type="Text" />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <Input name='email' type="email" />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel htmlFor="phone">Phone</FormLabel>
                                <Input name='phone' type="tel" />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel htmlFor="resume">Resume</FormLabel>
                                <input className='w-full text-sm text-slate-500 
      file:mr-1 file:py-2 file:px-4 hover:file:bg-slate-200 file:rounded-full file:border-0' name='resume'
                                    type="file" accept='.pdf, .doc, .docx' />
                                <FormHelperText>Upload your resume in pdf, docx or doc format</FormHelperText>
                            </FormControl>
                            <Button type='submit' colorScheme='blue'>
                                Submit
                            </Button>
                        </form>
                    </TabPanel>
                </TabPanels>
            </Tabs>

        </div>
    )
}

export default Application
