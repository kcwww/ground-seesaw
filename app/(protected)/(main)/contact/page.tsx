import ContactForm from '@/app/(protected)/(main)/contact/_components/ContactForm';

const ContactPage = () => {
  return (
    <div className="w-full md:pl-64">
      <div className="flex flex-col w-full justify-center items-center p-8 gap-8">
        <h1 className="text-2xl">문의하기</h1>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
