var React = require('react');

var CountdownForm = React.createClass({

    onFormSubmit: function(e) {
        e.preventDefault();
        var strSeconds = this.refs.seconds.value;

        if(strSeconds.match(/^[0-9]*$/)) {
            this.refs.seconds.value = '';

            // here is how we call props methods and pass the variable to the parent
            this.props.onSetCountdown(parseInt(strSeconds, 10));
        }

    },

    render: function() {

        return (
            <div>
                <form ref="form" onSubmit={this.onFormSubmit} className="countdown-form">
                    <input type="text" ref="seconds" placeholder="Enter time in seconds..."/>
                    <button className="button expanded">Start</button>
                </form>
            </div>
        );

    }
});

module.exports = CountdownForm;