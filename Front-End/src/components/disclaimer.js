import {React} from 'react';

class AllergyDisclaimer extends React.Component{
    constructor(props){
        super(props);
            this.state = {
                enabled: false
            };
        }
        handleClick () {
            this.setState({
                enabled: !this.state.enabled
            });
        }
        render() {
	return (
		<div>
			<h2>Allergens Disclaimer</h2>
            <p>
              No Bad Food is not responsible for the contents of food shared or prepared by members of the platform and will not assume liability for any allergic or adverse reactions. 

              Sharers, please be sure to note the presence of any of the Big 8 allergens:

            <ul>
                <li>Milk</li>    
                <li>Eggs</li>    
                <li>Fish</li>    
                <li>Shellfish</li>    
                <li>Wheat</li>    
                <li>Soy</li>    
                <li>Peanuts</li>    
                <li>Tree nuts</li>    
            </ul>      
                Failure to do so will result in removal from the platform.      
            </p>
            <form>
                <label>
                I understand these terms.
                <input type="Checkbox" checked={this.state.enabled} onClick={this.handleClick} />
                </label>
                <button  disabled={this.state.enabled}>Proceed</button>
            </form>
		</div>
	);
};
};

export default AllergyDisclaimer;