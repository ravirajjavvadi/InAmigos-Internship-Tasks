import os
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import landscape
from reportlab.lib import colors
from reportlab.lib.units import inch

# Setup 16:9 Page Size (Points)
PAGE_WIDTH = 1280
PAGE_HEIGHT = 720

def set_color(c, r, g, b, alpha=1):
    c.setFillColor(colors.Color(r/255, g/255, b/255, alpha))

def draw_slide_base(c, title, subtitle=None):
    """Draws a premium background with geometric accents to eliminate dead space."""
    c.saveState()
    # Deep Gradient Overlay
    steps = 100
    for i in range(steps):
        ratio = i / steps
        c.setFillColor(colors.Color(1 - (0.05 * ratio), 1 - (0.05 * ratio), 1, 0.1))
        c.rect(0, PAGE_HEIGHT - (i + 1) * (PAGE_HEIGHT/steps), PAGE_WIDTH, PAGE_HEIGHT/steps, stroke=0, fill=1)
    
    # Abstract Accents
    c.setFillColor(colors.Color(0.39, 0.4, 0.9, 0.05)) # Light Indigo
    c.circle(PAGE_WIDTH, PAGE_HEIGHT, 600, stroke=0, fill=1)
    c.circle(0, 0, 400, stroke=0, fill=1)
    
    # Bottom Bar / Branding
    c.setFillColor(colors.Color(0.2, 0.2, 0.4, 1))
    c.rect(0, 0, PAGE_WIDTH, 60, fill=1, stroke=0)
    c.setFillColor(colors.white)
    c.setFont("Helvetica-Bold", 12)
    c.drawString(60, 25, "InAmigos Foundation | 2026 Digital Transformation Strategy")
    c.drawRightString(PAGE_WIDTH - 60, 25, "Provisional Proposal • Intern: Javvadi Ravi Raj")
    
    # Title Block
    c.setFillColor(colors.Color(0.2, 0.2, 0.4, 1))
    c.setFont("Helvetica-Bold", 48)
    c.drawString(60, PAGE_HEIGHT - 120, title.upper())
    if subtitle:
        c.setFont("Helvetica-Bold", 24)
        c.setFillColor(colors.Color(0.4, 0.4, 0.6, 1))
        c.drawString(60, PAGE_HEIGHT - 160, subtitle)
    
    c.setStrokeColor(colors.Color(0.2, 0.2, 0.4, 0.2))
    c.setLineWidth(2)
    c.line(60, PAGE_HEIGHT - 180, PAGE_WIDTH - 60, PAGE_HEIGHT - 180)
    c.restoreState()

def draw_premium_card(c, x, y, w, h, title, list_items, outcome=None, color=colors.indigo):
    """Draws a high-density info card."""
    c.saveState()
    # Shadow
    c.setFillColor(colors.Color(0, 0, 0, 0.05))
    c.roundRect(x+10, y-10, w, h, 30, stroke=0, fill=1)
    # Card Body
    c.setFillColor(colors.white)
    c.setStrokeColor(colors.Color(0.8, 0.8, 0.9, 0.5))
    c.roundRect(x, y, w, h, 30, fill=1, stroke=1)
    
    # Title
    c.setFillColor(color)
    c.setFont("Helvetica-Bold", 22)
    c.drawString(x + 40, y + h - 60, title)
    
    # Content
    c.setFillColor(colors.Color(0.1, 0.1, 0.2, 1))
    c.setFont("Helvetica", 14)
    y_ptr = y + h - 100
    for item in list_items:
        c.drawString(x + 40, y_ptr, f"• {item}")
        y_ptr -= 28
    
    # Outcome box
    if outcome:
        c.setFillColor(colors.Color(color.red, color.green, color.blue, 0.1))
        c.roundRect(x + 20, y + 20, w - 40, 50, 15, fill=1, stroke=0)
        c.setFillColor(color)
        c.setFont("Helvetica-Bold", 12)
        c.drawCentredString(x + w/2, y + 40, f"EXPECTED OUTCOME: {outcome}")
    
    c.restoreState()

def slide_1_cover(c):
    # Divine Cover
    steps = 100
    for i in range(steps):
        ratio = i / steps
        c.setFillColor(colors.Color(0.25 - (0.1 * ratio), 0.25 - (0.1 * ratio), 0.4 - (0.1 * ratio), 1))
        c.rect(0, PAGE_HEIGHT - (i + 1) * (PAGE_HEIGHT/steps), PAGE_WIDTH, PAGE_HEIGHT/steps, stroke=0, fill=1)
    
    # Accents
    c.setFillColor(colors.Color(1, 1, 1, 0.05))
    c.circle(PAGE_WIDTH, PAGE_HEIGHT/2, 400, fill=1, stroke=0)
    c.circle(0, PAGE_HEIGHT/2, 200, fill=1, stroke=0)
    
    c.setFillColor(colors.white)
    c.setFont("Helvetica-Bold", 72)
    c.drawString(100, 480, "NGO WEBSITE")
    c.drawString(100, 390, "FEATURE HIGHLIGHTS")
    
    c.setFont("Helvetica", 32)
    c.setFillColor(colors.Color(0.7, 0.8, 1, 1))
    c.drawString(100, 320, "& Digital Transformation Proposal")
    
    c.setLineWidth(10)
    c.setStrokeColor(colors.white)
    c.line(100, 280, 800, 280)
    
    # Intern Meta
    c.setFillColor(colors.white)
    c.setFont("Helvetica-Bold", 18)
    c.drawString(100, 180, "Prepared By:")
    c.setFont("Helvetica-Bold", 36)
    c.drawString(100, 130, "Javvadi Ravi Raj")
    c.setFont("Helvetica-Bold", 14)
    c.setFillColor(colors.Color(0.7, 0.8, 1, 1))
    c.drawString(100, 100, "AI WEB DEVELOPMENT INTERN • INAMIGOS FOUNDATION")
    c.showPage()

def slide_2_challenges(c):
    draw_slide_base(c, "Current Digital Challenges", "Fundamental Barriers to Impact Scaling")
    
    # 4 Column Logic
    gw = (PAGE_WIDTH - 200) / 4
    draw_premium_card(c, 80, 220, gw - 20, 380, "1. VISIBILITY", ["Low Donation Access", "Fragmented pathways", "Donors wander in dark", "Missed opportunities"], "High bounce rates")
    draw_premium_card(c, 80 + gw, 220, gw - 20, 380, "2. OPS LOAD", ["Manual Boarding", "Onboarding friction", "Talent mismatch", "Resource leakage"], "Low scale potential")
    draw_premium_card(c, 80 + gw*2, 220, gw - 20, 380, "3. TRUST GAP", ["Hidden Impact", "Legacy reporting", "Data silos", "Low donor faith"], "Poor retention")
    draw_premium_card(c, 80 + gw*3, 220, gw - 20, 380, "4. NO PULSE", ["Weak Community", "Static interactions", "Passive audience", "Low brand bond"], "Low participation")
    
    c.setFillColor(colors.Color(0.2, 0.2, 0.4, 0.8))
    c.setFont("Helvetica-Bold", 18)
    c.drawCentredString(PAGE_WIDTH/2, 100, "OBJECTIVE: IMPROVE TRUST, ENGAGEMENT, AND SOCIAL IMPACT.")
    c.showPage()

def slide_3_feature_1(c):
    draw_slide_base(c, "Feature #1 – Smart Donation Hub", "Converting Intent into Impact Instantly")
    
    # Design Diagram: The Core Matrix
    c.setFillColor(colors.Color(0.95, 1, 0.95, 1))
    c.roundRect(80, 250, 600, 350, 40, fill=1, stroke=0)
    
    c.setFillColor(colors.Color(0.1, 0.5, 0.1, 1))
    c.setFont("Helvetica-Bold", 24)
    c.drawString(120, 540, "UI ARCHITECTURE")
    
    # Features inside mockup
    f_list = ["• Donate Now Quick-Action", "• Monthly Giving Program", "• Real-time Progress Tracker", "• Campaign Fund Meter", "• Quick Contribution Cards"]
    c.setFont("Helvetica-Bold", 18)
    for i, f in enumerate(f_list):
        c.drawString(140, 480 - (i*45), f)
        
    # Benefits Card
    draw_premium_card(c, 720, 250, 480, 350, "STRATEGIC BENEFITS", [
        "Increases fundraising conversion",
        "Improves donor trust via metrics",
        "Enables stable recurring income",
        "Creates transparent giving UX"
    ], "Higher engagement and stronger relationships", colors.green)
    
    c.showPage()

def slide_4_feature_2(c):
    draw_slide_base(c, "Feature #2 – Volunteer Portal", "Aligning Talent to Purpose")
    
    # Registration Flow Design
    c.saveState()
    c.setFillColor(colors.Color(0.95, 0.95, 1, 1))
    c.roundRect(80, 400, 1120, 180, 40, fill=1, stroke=0)
    
    steps = [("SIGNUP", "160"), ("SKILLS", "440"), ("MATCH", "720"), ("ENGAGE", "1000")]
    for i, (txt, x_pos) in enumerate(steps):
        c.setFillColor(colors.indigo)
        c.circle(int(x_pos), 490, 40, fill=1, stroke=0)
        c.setFillColor(colors.white)
        c.setFont("Helvetica-Bold", 14)
        c.drawCentredString(int(x_pos), 485, txt)
        if i < 3:
            c.setStrokeColor(colors.indigo)
            c.setLineWidth(4)
            c.line(int(x_pos)+40, 490, int(steps[i+1][1])-40, 490)
            
    # Feature list
    feats = ["Volunteer Form", "Skills Selection Matrix", "Availability Calendar", "Opportunity Matching Engine", "Volunteer Profile System"]
    draw_premium_card(c, 80, 100, 540, 260, "PORTAL CAPABILITIES", feats, None, colors.indigo)
    
    # Benefits
    draw_premium_card(c, 660, 100, 540, 260, "OPERATIONAL OUTCOMES", [
        "Streamlined onboarding process",
        "Precision talent allocation",
        "Increased community participation",
        "Data-driven project execution"
    ], "Stronger network and improved execution", colors.blue)
    c.restoreState()
    c.showPage()

def slide_5_feature_3(c):
    draw_slide_base(c, "Feature #3 – Impact Dashboard", "Real-Time Transparency & Global Credibility")
    
    # 4 Massive Stats Cards
    stats = [
        ("50,000+", "Meals Distributed", colors.orange),
        ("30,000+", "Interns Empowered", colors.indigo),
        ("100+", "Campaigns Conducted", colors.green),
        ("10+", "States Reached", colors.red)
    ]
    
    for i, (val, label, color) in enumerate(stats):
        x = 80 + (i % 2) * 580
        y = 380 if i < 2 else 180
        
        c.saveState()
        c.setFillColor(colors.white)
        c.roundRect(x, y, 540, 180, 40, fill=1, stroke=1)
        c.setFillColor(color)
        c.setFont("Helvetica-Bold", 64)
        c.drawString(x + 40, y + 90, val)
        c.setFillColor(colors.Color(0.2, 0.2, 0.3, 1))
        c.setFont("Helvetica-Bold", 24)
        c.drawString(x + 40, y + 50, label.upper())
        c.restoreState()
        
    c.setFont("Helvetica-Bold", 16)
    c.setFillColor(colors.grey)
    c.drawCentredString(PAGE_WIDTH/2, 100, "BENEFITS: Credibility, Measurable Outcomes, Stakeholder Confidence.")
    c.showPage()

def slide_6_feature_4(c):
    draw_slide_base(c, "Feature #4 – Success Stories", "Stories That Humanize the Mission")
    
    # Testimonial Mosaic
    draw_premium_card(c, 80, 360, 540, 240, "SOCIAL PROOF ASSETS", [
        "Beneficiary Video Testimonials",
        "Volunteer Success Chronicles",
        "Community Transformation Cases",
        "Before & After Impact Analysis"
    ], "Enhanced Credibility & Trust", colors.purple)
    
    # Visual Story Card
    c.saveState()
    c.setFillColor(colors.white)
    c.roundRect(660, 360, 540, 240, 40, fill=1, stroke=0)
    c.setFillColor(colors.purple)
    c.setFont("Helvetica-Bold", 100)
    c.drawString(700, 480, "“")
    c.setFillColor(colors.black)
    c.setFont("Helvetica-BoldOblique", 18)
    c.drawString(740, 470, "The foundation provided the tools, but")
    c.drawString(740, 440, "digital transparency provided the faith.")
    c.restoreState()
    
    # Outcomes
    draw_premium_card(c, 80, 100, 1120, 220, "EXPECTED IMPACT", [
        "Creates deep emotional connection with global donors",
        "Increases high-quality volunteer recruitment by 40%",
        "Boosts community resonance and brand authority"
    ], "Universal support and stronger community trust", colors.pink)
    c.showPage()

def slide_7_feature_5(c):
    draw_slide_base(c, "Feature #5 – Campaigns Center", "Centralized Hub for Collective Action")
    
    # Timeline visualization
    c.setFillColor(colors.white)
    c.roundRect(80, 380, 1120, 220, 40, fill=1, stroke=0)
    
    c.setFillColor(colors.indigo)
    c.setFont("Helvetica-Bold", 32)
    c.drawString(140, 530, "CAMPAIGN ECOSYSTEM")
    
    parts = ["ACTIVE CARDS", "EVENT CALENDAR", "REGISTRATION", "AWARENESS", "ACTIVITIES"]
    for i, p in enumerate(parts):
        c.setFillColor(colors.Color(0.9, 0.9, 1, 1))
        c.roundRect(140 + (i*210), 420, 180, 60, 15, fill=1, stroke=0)
        c.setFillColor(colors.indigo)
        c.setFont("Helvetica-Bold", 12)
        c.drawCentredString(230 + (i*210), 445, p)
        
    # Content Columns
    draw_premium_card(c, 80, 100, 540, 240, "CORE CAPABILITIES", [
        "Live Campaign Tracking",
        "Interactive Events Calendar",
        "Automated Outreach Flows",
        "Stronger Outreach Systems"
    ], None, colors.indigo)
    
    draw_premium_card(c, 660, 100, 540, 240, "KEY BENEFITS", [
        "Maximum Campaign Visibility",
        "Increased Global Participation",
        "Streamlined Public Outreach",
        "Stronger Stakeholder Involvement"
    ], "Greater campaign success and engagement", colors.green)
    
    c.showPage()

def slide_8_future_ai(c):
    draw_slide_base(c, "Future AI-Powered NGO Vision", "2026 Strategic Tech Roadmap")
    
    # 5 AI Cards - High density
    ai_feats = [
        ("AI Volunteer Assistant", "Auto-matches talent to tasks."),
        ("AI Donation Guide", "Personalized contribution tracks."),
        ("AI Support Chatbot", "24/7 informational sovereignty."),
        ("AI Impact Analytics", "Predictive outcome modeling."),
        ("AI Multilingual Hub", "Global accessibility engine.")
    ]
    
    for i, (tit, desc) in enumerate(ai_feats):
        iy = 450 - (i*75)
        c.saveState()
        c.setFillColor(colors.white)
        c.roundRect(80, iy, 540, 60, 15, fill=1, stroke=1)
        c.setFillColor(colors.purple)
        c.setFont("Helvetica-Bold", 18)
        c.drawString(110, iy + 25, tit)
        c.setFont("Helvetica", 12)
        c.setFillColor(colors.grey)
        c.drawString(110, iy + 8, desc)
        c.restoreState()
        
    # Final Recommendation
    c.saveState()
    c.setFillColor(colors.Color(0.2, 0.2, 0.4, 1))
    c.roundRect(660, 150, 540, 360, 40, fill=1, stroke=0)
    c.setFillColor(colors.white)
    c.setFont("Helvetica-Bold", 28)
    c.drawString(700, 460, "EXECUTIVE SUMMARY")
    c.setFont("Helvetica", 16)
    rec_text = "By implementing these 5 core features,\nthe InAmigos Foundation will transform\ninto a digital powerhouse, maximizing\ntransparency, volunteer efficiency,\nand global donor trust through\nstate-of-the-art AI integration."
    t_obj = c.beginText(700, 420)
    t_obj.setLeading(24)
    for line in rec_text.split('\n'):
        t_obj.textLine(line)
    c.drawText(t_obj)
    
    c.setFont("Helvetica-Bold", 14)
    c.setFillColor(colors.Color(0.7, 0.8, 1, 1))
    c.drawCentredString(930, 200, "TRANSFORMING NGOs THROUGH TECHNOLOGY,")
    c.drawCentredString(930, 180, "TRANSPARENCY, AND ARTIFICIAL INTELLIGENCE.")
    c.restoreState()
    c.showPage()

def generate_pdf():
    filename = "ULTIMATE_NGO_TRANSFORMATION_PROPOSAL.pdf"
    c = canvas.Canvas(filename, pagesize=(PAGE_WIDTH, PAGE_HEIGHT))
    
    slide_1_cover(c)
    slide_2_challenges(c)
    slide_3_feature_1(c)
    slide_4_feature_2(c)
    slide_5_feature_3(c)
    slide_6_feature_4(c)
    slide_7_feature_5(c)
    slide_8_future_ai(c)
    
    c.save()
    print(f"Success: {filename} generated in Ultimate Creator Mode.")

if __name__ == "__main__":
    generate_pdf()
