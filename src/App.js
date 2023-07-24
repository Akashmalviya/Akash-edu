import Navbar from "./component/navbar/Navbar";
import Introsection from "./component/intro-Section/Introsection";
import Curriculum from "./component/curriculum/Curriculum";
import Featurs from "./component/featurs/Featurs";
import MaincontactForm from "./component/contactForm/Main-contact-form";
import Testimonials from "./component/testimonials/Testimonials";
import AboutSection from "./component/about/About";
import FaqSection from "./component/faq/Faq";
import Footer from "./component/footer/footer";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Introsection />
			<Curriculum />
			<Featurs />
			<MaincontactForm />
			<Testimonials />
			<AboutSection />
			<FaqSection />
			<Footer />
		</div>
	);
}

export default App;
