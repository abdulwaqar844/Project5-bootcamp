import "../App.css";
import pic01 from './images/pic01.jpg'
import pic02 from './images/pic02.jpg'
import pic03 from './images/pic03.jpg'

function Services() 
{
  return (
    <div >
   	<div id="page" class="container">
		<div class="column1">
			<div class="title">
				<h2>Our Services</h2>
			</div>
			<p>We provide <strong>Services</strong> of Problems related to Digital World <a href="http://templated.co" rel="nofollow">TEMPLATED</a>.We are developing digital Solution for our International Clients. We have satisfied client all over the World. </p>
		</div>
		<div class="column2">
			<div class="title">
				<h2>Fusce ultrices</h2>
			</div>
			<img src={pic01} width="282" height="150" alt="" />
			<p>Donec nonummy magna quis risus. Quisque eleifend. Phasellus tempor vehicula justo. Aliquam lacinia metus.</p>
		</div>
		<div class="column3">
			<div class="title">
				<h2>Mauris vulputate</h2>
			</div>
			<img src={pic02} width="282" height="150" alt="" />
			<p>Phasellus tempor vehicula justo. Aliquam lacinia metus ut elit. Suspendisse iaculis mauris nec lorem.</p>
		</div>
		<div class="column4">
			<div class="title">
				<h2>Praesent scelerisque</h2>
			</div>
			<img src={pic03} width="282" height="150" alt="" />
			<p>Quisque eleifend. Phasellus tempor vehicula justo. Aliquam lacinia metus ut elit. Suspendisse iaculis mauris.</p>
		</div>
	</div>
    </div>
  );
}

export default Services;
