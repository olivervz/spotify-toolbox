import React from "react";
import "./Privacy.css";
import Footer from "../Footer";

const Privacy = () => {
    return (
        <div className="privacy-container">
            <h1 className="privacy-title">Privacy</h1>
            <div className="privacy-text-container">
                <p className="privacy-text">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint
                    occaecati cupiditate non provident, similique sunt in culpa
                    qui officia deserunt mollitia animi, id est laborum et
                    dolorum fuga. Et harum quidem rerum facilis est et expedita
                    distinctio. Nam libero tempore, cum soluta nobis est
                    eligendi optio cumque nihil impedit quo minus id quod maxime
                    placeat facere possimus, omnis voluptas assumenda est, omnis
                    dolor repellendus.
                </p>
            </div>
            <Footer first="login" second="about" />
        </div>
    );
};

export default Privacy;
