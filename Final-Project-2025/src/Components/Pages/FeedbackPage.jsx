import React, { useState } from "react"

export default function FeedbackPage() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        feedback: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value
        });
    };

    const maxCharacters = 200;
    const remainingCharacters = maxCharacters -
formData.feedback.length;

    const isFormComplete = formData.name && formData.email &&
formData.feedback;
 
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted successfully!');
    };

    return (
        <main>
            <h1>Please Submit feedback</h1>
            <div className="feedback-form-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="feedback">Feedback:</label>
                            <textarea
                                id="feedback"
                                name="feedback"
                                value={formData.feedback}
                                onChange={handleChange}
                                placeholder="Please share your feedback (max 200 characters)"
                                maxLength={maxCharacters}
                                rows={5}
                            />
                            <div className="character-counter">
                                {remainingCharacters} characters remaining
                            </div>
                        </div>
                        <button
                            type="submit"
                            disabled={!isFormComplete}
                            className={isFormComplete ? "btn-enabled" : "btn-disabled"}
                        >
                            Submit Feedback
                        </button>
                </form>
            </div>
        </main>
    );
}
