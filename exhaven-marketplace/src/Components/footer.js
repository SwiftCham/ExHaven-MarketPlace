import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const Footer = () => {
    //States to manage the visibility of modals
    const [showTerms, setShowTerms] = useState(false);
    const [showPrivacy, setShowPrivacy] = useState(false);
    const [showContact, setShowContact] = useState(false);

    //Handlers to open modals
    const handleTermsOpen = () => setShowTerms(true);
    const handlePrivacyOpen = () => setShowPrivacy(true);
    const handleContactOpen = () => setShowContact(true);

    //Handlers to close modals
    const handleTermsClose = () => setShowTerms(false);
    const handlePrivacyClose = () => setShowPrivacy(false);
    const handleContactClose = () => setShowContact(false);

    return (
        <>
            <footer className="footer mt-auto py-3 bg-light" style={{ position: "fixed", bottom: 0, width: "100%" }}>
                <Container>
                    <Nav className="justify-content-center">
                        <Nav.Item>
                            <Nav.Link onClick={handleTermsOpen}>Terms of Service</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={handlePrivacyOpen}>Privacy Policy</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={handleContactOpen}>Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </footer>

            {/* Terms of Service Modal */}
            <Modal show={showTerms} onHide={handleTermsClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Terms of Service</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h2>Terms of Service</h2>
                    <p>Thank you for using ExHaven! Please read these terms of service carefully before using our platform.</p>
                    <h3>1. Acceptance of Terms</h3>
                    <p>By accessing or using ExHaven, you agree to be bound by these terms of service. If you do not agree with any part of these terms, you may not use our platform.</p>
                    <h3>2. User Conduct</h3>
                    <p>When using ExHaven, you agree to abide by our community guidelines and not engage in any illegal, harmful, or abusive activities.</p>
                    <h3>3. Intellectual Property</h3>
                    <p>All content on ExHaven, including but not limited to text, graphics, logos, and images, is the property of ExHaven and protected by intellectual property laws.</p>
                    <h3>4. Limitation of Liability</h3>
                    <p>ExHaven shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use of our platform.</p>
                    <h3>5. Governing Law</h3>
                    <p>These terms of service shall be governed by and construed in accordance with the laws of the jurisdiction in which ExHaven operates.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleTermsClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showPrivacy} onHide={handlePrivacyClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Privacy Policy</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>This is the privacy policy content for ExHaven. We are committed to protecting your privacy and ensuring the security of your personal information.</p>
                    <h3>1. Information We Collect</h3>
                    <p>We collect information that you provide to us when creating an account or using our platform, such as your name, email address, and payment details.</p>
                    <h3>2. How We Use Your Information</h3>
                    <p>We use your information to provide and improve our services, personalize your experience, and communicate with you about our platform.</p>
                    <h3>3. Information Sharing</h3>
                    <p>We may share your information with trusted third parties who assist us in operating our platform, conducting business, or servicing you.</p>
                    <h3>4. Security</h3>
                    <p>We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.</p>
                    <h3>5. Changes to Privacy Policy</h3>
                    <p>We may update our privacy policy from time to time. Any changes will be posted on this page, and you are encouraged to review the policy periodically.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handlePrivacyClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Contact Modal */}
            <Modal show={showContact} onHide={handleContactClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3>Email:</h3>
                    <p>Support@ExHaven.com</p>
                    <h3>Phone:</h3>
                    <p>555-555-5555</p>
                    <h3>Address:</h3>
                    <p>1234 Main Street, Springfield, IL 62701</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleContactClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Footer;