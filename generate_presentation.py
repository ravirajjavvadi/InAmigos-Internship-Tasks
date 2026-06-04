import os
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import landscape
from reportlab.lib import colors
from reportlab.lib.units import inch

# 16:9 Page Dimensions (Points)
WIDTH = 1280
HEIGHT = 720

# Strict Spatial Zones
HEADER_Y = 540
FOOTER_Y = 60
MARGIN_X = 60

def draw_elite_background(c, type="tech"):
    """Subtle, non-competing backgrounds for professional layering."""
    c.saveState()
    # Gradient Base
    steps = 100
    for i in range(steps):
        ratio = i/steps
        c.setFillColor(colors.Color(0.98 - (0.02*ratio), 0.98 - (0.02*ratio), 1.0, 1.0))
        c.rect(0, HEIGHT - (i+1)*(HEIGHT/steps), WIDTH, HEIGHT/steps, stroke=0, fill=1)
    
    # Ultra-subtle visual treats
    if type == "tech":
        c.setStrokeColor(colors.Color(0.2, 0.4, 0.9, 0.03))
        for i in range(0, WIDTH, 40): c.line(i, 0, i, HEIGHT)
        for i in range(0, HEIGHT, 40): c.line(0, i, WIDTH, i)
    elif type == "waves":
        c.setStrokeColor(colors.Color(0.2, 0.4, 0.9, 0.05))
        for i in range(5):
            c.bezier(0, 100+i*20, 400, 600, 800, -100, WIDTH, 200+i*20)
    elif type == "circles":
        c.setFillColor(colors.Color(0.2, 0.4, 0.9, 0.02))
        c.circle(WIDTH, HEIGHT, 500, stroke=0, fill=1)
        c.circle(0, 0, 300, stroke=0, fill=1)
    c.restoreState()

def draw_elite_header(c, title, subtitle=None):
    """Architectural header that protects its own space."""
    c.saveState()
    # Bottom accent
    c.setFillColor(colors.Color(0.1, 0.1, 0.4, 1))
    c.rect(0, HEADER_Y + 160, WIDTH, 5, fill=1, stroke=0)
    
    # Main Title
    c.setFillColor(colors.Color(0.05, 0.05, 0.2, 1))
    c.setFont("Helvetica-Bold", 60)
    c.drawString(MARGIN_X, HEADER_Y + 60, title.upper())
    
    # Subtitle
    if subtitle:
        c.setFont("Helvetica-Bold", 24)
        c.setFillColor(colors.Color(0.4, 0.4, 0.6, 1))
        c.drawString(MARGIN_X, HEADER_Y + 20, subtitle)
    
    # Metadata
    c.setFont("Helvetica-Bold", 10)
    c.setFillColor(colors.grey)
    c.drawRightString(WIDTH - MARGIN_X, HEADER_Y + 140, "INAMIGOS FOUNDATION • PROPOSAL v5")
    c.drawRightString(WIDTH - MARGIN_X, HEADER_Y + 120, "INTERN: JAVVADI RAVI RAJ")
    c.restoreState()

def draw_elite_card(c, x, y, w, h, title, items, outcome=None, color=colors.indigo):
    """Precise card drawing with internal layout logic."""
    c.saveState()
    # Soft shadow
    c.setFillColor(colors.Color(0, 0, 0, 0.04))
    c.roundRect(x+5, y-5, w, h, 25, stroke=0, fill=1)
    
    # Card Body
    c.setFillColor(colors.white)
    c.setStrokeColor(colors.Color(0.8, 0.8, 0.9, 0.4))
    c.roundRect(x, y, w, h, 25, fill=1, stroke=1)
    
    # Header line
    c.setFillColor(color)
    c.rect(x + 30, y + h - 50, 80, 5, fill=1, stroke=0)
    
    # Title
    c.setFillColor(colors.black)
    c.setFont("Helvetica-Bold", 26)
    c.drawString(x + 30, y + h - 100, title)
    
    # Text items
    c.setFont("Helvetica", 16)
    c.setFillColor(colors.Color(0.2, 0.2, 0.3, 1))
    line_y = y + h - 140
    for item in items:
        c.drawString(x + 35, line_y, f"• {item}")
        line_y -= 32
        
    # Outcome zone
    if outcome:
        oy = y + 20
        c.setFillColor(colors.Color(color.red, color.green, color.blue, 0.08))
        c.roundRect(x+15, oy, w-30, 50, 15, fill=1, stroke=0)
        c.setFillColor(color)
        c.setFont("Helvetica-Bold", 11)
        c.drawCentredString(x + w/2, oy + 20, f"OUTCOME: {outcome.upper()}")
    c.restoreState()

def slide_1_v5_cover(c):
    # Professional Dark Gradient Cover
    steps = 100
    for i in range(steps):
        ratio = i/steps
        c.setFillColor(colors.Color(0.1 + 0.1*ratio, 0.1 + 0.2*ratio, 0.3 + 0.3*ratio, 1))
        c.rect(0, HEIGHT - (i+1)*(HEIGHT/steps), WIDTH, HEIGHT/steps, stroke=0, fill=1)
    
    c.setFillColor(colors.white)
    c.setFont("Helvetica-Bold", 90)
    c.drawString(100, 480, "NGO DIGITAL")
    c.drawString(100, 360, "STRATEGY")
    
    c.setFont("Helvetica-Bold", 28)
    c.setFillColor(colors.Color(0.8, 0.9, 1, 1))
    c.drawString(100, 300, "Feature Highlights & Transformation Proposal")
    
    c.setStrokeColor(colors.white)
    c.setLineWidth(5)
    c.line(100, 260, 400, 260)
    
    # Bottom Info
    c.setFillColor(colors.white)
    c.setFont("Helvetica", 20)
    c.drawString(100, 150, "PREPARED FOR INAMIGOS FOUNDATION")
    c.setFont("Helvetica-Bold", 36)
    c.drawString(100, 100, "Javvadi Ravi Raj")
    c.setFont("Helvetica", 14)
    c.drawString(100, 75, "AI Web Development Intern")
    c.showPage()

def slide_2_v4_challenges(c):
    draw_elite_background(c, "circles")
    draw_elite_header(c, "Current Digital Challenges", "Overcoming Inefficiencies to Amplify Impact")
    
    # 2x2 Clean Grid
    cw, ch = 540, 220
    gy1, gy2 = 300, 70
    draw_elite_card(c, 80, gy1, cw, ch, "1. VISIBILITY", ["Hidden donation pathways", "Poor donor navigation"], "Missed Revenue")
    draw_elite_card(c, 660, gy1, cw, ch, "2. OPS LOAD", ["Manual volunteer boarding", "Resource friction"], "Capped Reach")
    draw_elite_card(c, 80, gy2, cw, ch, "3. TRUST GAP", ["Legacy impact reporting", "Data transparency silos"], "Low Retention")
    draw_elite_card(c, 660, gy2, cw, ch, "4. ENGAGEMENT", ["Passive audience interaction", "Low community bonding"], "Weak Loyalty")
    c.showPage()

def slide_3_v4_feature_1(c):
    draw_elite_background(c, "waves")
    draw_elite_header(c, "Feature #1 – Donation Hub", "Optimizing the Supporter Giving Experience")
    
    # Balanced Split: Content vs Visual Treat
    draw_elite_card(c, 80, 80, 580, 440, "HUB CAPABILITIES", [
        "One-Tap 'Donate Now' Buttons",
        "Monthly Giving Subscription Flow",
        "Visual Progress Trackers",
        "Multi-Method Payment Stack",
        "Quick Contribution Feature Cards"
    ], "High Conversion & Recurring Revenue", colors.green)
    
    # Visual Treat (Emerald Core)
    c.saveState()
    c.setFillColor(colors.Color(0, 0.6, 0.2, 0.03))
    for i in range(6): c.circle(950, 300, 80 + i*40, fill=1, stroke=0)
    c.setFillColor(colors.white)
    c.circle(950, 300, 100, fill=1, stroke=1)
    c.setFillColor(colors.Color(0, 0.6, 0.2, 1))
    c.setFont("Helvetica-Bold", 80)
    c.drawCentredString(950, 275, "$")
    c.restoreState()
    c.showPage()

def slide_4_v4_feature_2(c):
    draw_elite_background(c, "tech")
    draw_elite_header(c, "Feature #2 – Volunteer Portal", "Precision Human Capital Orchestration")
    
    # Top Visual: Progress Path
    c.saveState()
    c.setStrokeColor(colors.indigo)
    c.setLineWidth(3)
    c.line(200, 480, 1080, 480)
    steps = ["SIGNUP", "SKILLS", "MATCH", "ENGAGE"]
    for i, s in enumerate(steps):
        x = 200 + i*293
        c.setFillColor(colors.indigo)
        c.circle(x, 480, 35, fill=1, stroke=0)
        c.setFillColor(colors.white)
        c.setFont("Helvetica-Bold", 10)
        c.drawCentredString(x, 477, s)
    c.restoreState()
    
    # Side-by-side cards
    draw_elite_card(c, 80, 80, 540, 340, "SYSTEM FEATURES", ["Skill Selection Matrix", "Availability Calendar", "Profile Dashboard"], "Streamlined Ops")
    draw_elite_card(c, 660, 80, 540, 340, "STRATEGIC GAINS", ["Zero onboarding friction", "Better volunteer matching"], "Scaling Potential", colors.blue)
    c.showPage()

def slide_5_v4_feature_3(c):
    draw_elite_background(c, "circles")
    draw_elite_header(c, "Feature #3 – Impact Dashboard", "Real-Time Transparency as a Trust Lever")
    
    # 2x2 Symmetrical Grid of High-Impact Metrics
    stats = [
        ("50,000+", "Meals Distributed", colors.orange),
        ("30,000+", "Interns Empowered", colors.indigo),
        ("100+", "Campaigns Active", colors.green),
        ("15+", "States Covered", colors.red)
    ]
    for i, (val, lbl, clr) in enumerate(stats):
        x = 80 + (i % 2)*580
        y = 280 if i < 2 else 70
        draw_elite_card(c, x, y, 540, 180, lbl.upper(), [val], "Credibility Boost", clr)
    c.showPage()

def slide_6_v4_feature_4(c):
    draw_elite_background(c, "waves")
    draw_elite_header(c, "Feature #4 – Success Stories", "Emotional Connection to the Mission")
    
    # Large Quote Card (Top)
    c.saveState()
    c.setFillColor(colors.white)
    c.roundRect(80, 300, 1120, 220, 30, fill=1, stroke=1)
    c.setFillColor(colors.Color(1, 0, 0.5, 0.02))
    c.circle(1150, 450, 200, fill=1, stroke=0)
    c.setFillColor(colors.black)
    c.setFont("Helvetica-BoldOblique", 28)
    c.drawCentredString(WIDTH/2, 430, "\"The foundation provided the tools,\"")
    c.drawCentredString(WIDTH/2, 380, "\"Digital transparency provided the faith.\"")
    c.setFont("Helvetica-Bold", 18)
    c.setFillColor(colors.purple)
    c.drawRightString(1100, 330, "— Anita R., Community Leader")
    c.restoreState()
    
    # Bottom nodes
    draw_elite_card(c, 80, 70, 540, 200, "SOCIAL PROOF", ["Live Testimonials", "Video Stories"], "Trust Building", colors.purple)
    draw_elite_card(c, 660, 70, 540, 200, "CASE STUDIES", ["Transformation Logs", "Press Hits"], "Authority", colors.purple)
    c.showPage()

def slide_7_v4_feature_5(c):
    draw_elite_background(c, "tech")
    draw_elite_header(c, "Feature #5 – Campaign Hub", "Mobilizing the Public through Transparency")
    
    # Large Progress Treat (Top)
    c.saveState()
    c.setFillColor(colors.Color(0.8, 1, 0.8, 1))
    c.roundRect(80, 380, 1120, 140, 30, fill=1, stroke=0)
    c.setStrokeColor(colors.green)
    c.setLineWidth(10)
    c.line(160, 440, 1120, 440)
    c.setFillColor(colors.green)
    c.rect(160, 435, 800, 10, fill=1, stroke=0)
    c.setFont("Helvetica-Bold", 24)
    c.drawString(160, 470, "BUILD-A-SCHOOL DRIVE")
    c.drawRightString(1120, 470, "85% COMPLETE")
    c.restoreState()
    
    # Bottom Dual Split
    draw_elite_card(c, 80, 80, 540, 260, "INTERACTIVE HUB", ["Event Calendars", "Registration Logic"], "Greater Reach")
    draw_elite_card(c, 660, 80, 540, 260, "BENEFITS", ["Higher Participation", "Stakeholder Engagement"], "Direct Impact", colors.green)
    c.showPage()

def slide_8_v4_ai_vision(c):
    draw_elite_background(c, "tech")
    # Dark Mode for Future AI Header
    c.setFillColor(colors.Color(0.05, 0.05, 0.15, 1))
    c.rect(0, HEADER_Y + 160, WIDTH, 200, fill=1, stroke=0)
    c.setFillColor(colors.white)
    c.setFont("Helvetica-Bold", 64)
    c.drawString(60, HEADER_Y + 60, "AI-POWERED NGO VISION")
    c.setFont("Helvetica-Bold", 20)
    c.setFillColor(colors.Color(0.7, 0.8, 1, 1))
    c.drawString(60, HEADER_Y + 20, "2026 Technological Nexus for Social Sovereignty")
    
    # High-Density Vision Nodes in 3 columns
    nodes = [
        ("AI MATCHMAKER", "Talent Alignment", 80, 330),
        ("AI DONOR GUIDE", "Giving Logic", 450, 330),
        ("AI HUB CHATBOT", "24/7 Support", 820, 330),
        ("AI ANALYTICS", "Outcome Models", 80, 180),
        ("AI LINGUO", "Multi-Lang Reach", 450, 180),
        ("BLOCKCHAIN", "Fiscal Truth", 820, 180)
    ]
    for tit, dsc, nx, ny in nodes:
        draw_elite_card(c, nx, ny, 340, 140, tit, [dsc], None, colors.purple)
        
    # Final Conclusion Box (Bottom)
    c.saveState()
    c.setFillColor(colors.Color(0.1, 0.1, 0.3, 1))
    c.roundRect(80, 50, 1120, 100, 25, fill=1, stroke=0)
    c.setFillColor(colors.white)
    c.setFont("Helvetica-Bold", 24)
    c.drawCentredString(WIDTH/2, 105, "RECOMMENDATION: TRANSFORMING NGOs THROUGH TECHNOLOGY,")
    c.drawCentredString(WIDTH/2, 75, "TRANSPARENCY, AND ARTIFICIAL INTELLIGENCE.")
    c.restoreState()
    c.showPage()

def generate_pdf():
    filename = "ARCHITECT_ELITE_NGO_PROPOSAL.pdf"
    c = canvas.Canvas(filename, pagesize=(WIDTH, HEIGHT))
    slide_1_v5_cover(c)
    slide_2_v4_challenges(c)
    slide_3_v4_feature_1(c)
    slide_4_v4_feature_2(c)
    slide_5_v4_feature_3(c)
    slide_6_v4_feature_4(c)
    slide_7_v4_feature_5(c)
    slide_8_v4_ai_vision(c)
    c.save()
    print(f"Success: {filename} generated at Architectural Elite fidelity.")

if __name__ == "__main__":
    generate_pdf()
