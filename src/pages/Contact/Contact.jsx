import Navegation from '../../components/Navegation/Navegation'
import './contact.css';

export default function Contact() {
    return(
        <div>
        <Navegation pageName={"Contact"}/>
                <div className='container contacto p-4'>
                    <h1>Contact</h1>
                        <p className=" fs-3">Leave us your information so we can contact you</p>
                        <form>
                        <div class="row"> 
                            <div class="col-md-6"> 
                                <div class="mb-3"> 
                                <label htmlFor='name'>Name:</label>
                                <input type='text' id='name' class="form-control" />
                                </div>
                            </div>
                            <div class="col-md-6"> 
                                <div class="mb-3"> 
                                <label htmlFor='email'>Email:</label>
                                <input type="email" id='email' class="form-control" />
                                </div>
                            </div>
                            </div>
                            <div class="mb-3"> 
                            <label htmlFor='message'>Message:</label>
                            <textarea id='message' class="form-control" rows="8"></textarea>
                            </div>
                            <button type="submit" className="btn btn-secondary">Send</button>
                        </form>  
                </div>          
        </div>
        
    )
}

