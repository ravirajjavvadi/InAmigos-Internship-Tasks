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

def draw_beast_gradient(c, color1, color2):
    """Draws a vertical gradient background with a high-fidelity feel."""
    steps = 100
    step_h = PAGE_HEIGHT / steps
    for i in range(steps):
        ratio = i / steps
        r = color1.red + (color2.red - color1.red) * ratio
        g = color1.green + (color2.green - color1.green) * ratio
        b = color1.blue + (color2.blue - color1.blue) * ratio
        c.setFillColor(colors.Color(r, g, b, 1.0))
        c.rect(0, PAGE_HEIGHT - (i + 1) * step_h, PAGE_WIDTH, step_h, stroke=0, fill=1)

def draw_background_pattern(c, type="tech"):
    """Adds a visual 'treat' background pattern to eliminate dead space."""
    c.saveState()
    if type == "tech":
        c.setStrokeColor(colors.Color(0.2, 0.2, 0.4, 0.05))
        c.setLineWidth(1)
        for i in range(0, PAGE_WIDTH, 40):
            c.line(i, 0, i, PAGE_HEIGHT)
        for j in range(0, PAGE_HEIGHT, 40):
            c.line(0, j, PAGE_WIDTH, j)
    elif type == "waves":
        c.setStrokeColor(colors.Color(0.39, 0.4, 0.9, 0.1))
        c.setLineWidth(2)
        for i in range(0, 10):
            c.bezier(0, 100 + i*20, 300, 500 - i*10, 900, -200 + i*30, PAGE_WIDTH, 300 + i*10)
    elif type == "glow":
        c.setFillColor(colors.Color(0.4, 0.4, 0.9, 0.05))
        c.circle(PAGE_WIDTH, PAGE_HEIGHT, 600, stroke=0, fill=1)
        c.circle(0, 0, 400, stroke=0, fill=1)
    c.restoreState()

def draw_beast_header(c, title, subtitle=None):
    """Draws a premium header system that LOCKS space to prevent overlap."""
    c.saveState()
    # Header background strip (translucent)
    c.setFillColor(colors.Color(1, 1, 1, 0.8))
    c.rect(0, PAGE_HEIGHT - 180, PAGE_WIDTH, 180, fill=1, stroke=0)
    
    # Bottom accent line
    c.setFillColor(colors.indigo)
    c.rect(0, PAGE_HEIGHT - 185, PAGE_WIDTH, 5, fill=1, stroke=0)
    
    # Title
    c.setFillColor(colors.Color(0.1, 0.1, 0.3, 1))
    c.setFont("Helvetica-Bold", 64)
    c.drawString(60, PAGE_HEIGHT - 110, title.upper())
    
    # Subtitle
    if subtitle:
        c.setFont("Helvetica-Bold", 24)
        c.setFillColor(colors.Color(0.4, 0.4, 0.6, 1))
        c.drawString(60, PAGE_HEIGHT - 150, subtitle)
    
    # Logo / ID
    c.setFillColor(colors.Color(0.2, 0.2, 0.4, 1))
    c.setFont("Helvetica-Bold", 12)
    c.drawRightString(PAGE_WIDTH - 60, PAGE_HEIGHT - 50, "ELITE PROPOSAL • INAMIGOS FOUNDATION")
    c.drawRightString(PAGE_WIDTH - 60, PAGE_HEIGHT - 70, "INTERN: JAVVADI RAVI RAJ")
    c.restoreState()

def draw_glowing_card(c, x, y, w, h, title, list_items, outcome=None, color=colors.indigo):
    """Draws a high-impact, non-overlapping card with glowing borders."""
    c.saveState()
    # Glowing shadow
    c.setFillColor(color)
    c.setFillAlpha(0.05)
    c.roundRect(x-10, y-10, w+20, h+20, 40, stroke=0, fill=1)
    
    # Card Body
    c.setFillColor(colors.white)
    c.setFillAlpha(1)
    c.setStrokeColor(colors.Color(0.8, 0.8, 1, 0.3))
    c.roundRect(x, y, w, h, 35, fill=1, stroke=1)
    
    # Title Accent
    c.setFillColor(color)
    c.roundRect(x + 35, y + h - 55, 120, 8, 4, fill=1, stroke=0)
    
    # Title
    c.setFillColor(colors.black)
    c.setFont("Helvetica-Bold", 32)
    c.drawString(x + 35, y + h - 105, title)
    
    # List Items - BOLD and LARGE
    c.setFillColor(colors.Color(0.2, 0.2, 0.3, 1))
    c.setFont("Helvetica", 18)
    y_ptr = y + h - 150
    for item in list_items:
        c.drawString(x + 40, y_ptr, f"• {item}")
        y_ptr -= 35
        
    # Outcome
    if outcome:
        c.setFillColor(colors.Color(color.red, color.green, color.blue, 0.1))
        c.roundRect(x + 20, y + 20, w - 40, 60, 20, fill=1, stroke=0)
        c.setFillColor(color)
        c.setFont("Helvetica-Bold", 14)
        c.drawCentredString(x + w/2, y + 45, f"EXPECTED OUTCOME: {outcome}")
    c.restoreState()

def slide_1_v4_cover(c):
    draw_beast_gradient(c, colors.Color(0.1, 0.1, 0.3), colors.Color(0.2, 0.3, 0.6))
    draw_background_pattern(c, "tech")
    
    c.saveState()
    # Large Decorative Orb
    c.setFillColor(colors.white)
    c.setFillAlpha(0.05)
    c.circle(PAGE_WIDTH - 200, PAGE_HEIGHT/2, 400, fill=1, stroke=0)
    
    c.setFillColor(colors.white)
    c.setFont("Helvetica-Bold", 110)
    c.drawString(80, 460, "ELITE")
    c.drawString(80, 330, "PROPOSAL")
    
    c.setLineWidth(15)
    c.setStrokeColor(colors.white)
    c.line(80, 290, 600, 290)
    
    c.setFont("Helvetica-Bold", 36)
    c.setFillColor(colors.Color(0.8, 0.9, 1, 1))
    c.drawString(80, 230, "Digital Transformation Strategy 2026")
    
    # Credits Plate
    c.setFillColor(colors.white)
    c.setFillAlpha(0.1)
    c.roundRect(80, 50, 600, 140, 30, fill=1, stroke=0)
    c.setFillAlpha(1)
    c.setFillColor(colors.white)
    c.setFont("Helvetica-Bold", 18)
    c.drawString(110, 150, "PREPARED BY")
    c.setFont("Helvetica-Bold", 42)
    c.drawString(110, 100, "Javvadi Ravi Raj")
    c.setFont("Helvetica-Bold", 14)
    c.setFillColor(colors.Color(0.8, 0.9, 1, 1))
    c.drawString(110, 75, "AI WEB DEVELOPMENT INTERN • INAMIGOS FOUNDATION")
    c.restoreState()
    c.showPage()

def slide_2_v4_challenges(c):
    draw_beast_gradient(c, colors.white, colors.Color(0.96, 0.96, 1))
    draw_background_pattern(c, "glow")
    draw_beast_header(c, "Current Digital Challenges", "Visualizing Persistent Barriers to Social Impact")
    
    # 4-Grid Cards
    w = (PAGE_WIDTH - 180) / 2
    h = 240
    draw_glowing_card(c, 70, 250, w, h, "1. VISIBILITY", ["Low Donation Access", "Fragmented pathways", "Donors wander in dark"], "High Donor Bounce Rate")
    draw_glowing_card(c, 70 + w + 40, 250, w, h, "2. OPS LOAD", ["Manual Boarding", "Onboarding friction", "Talent mismatch"], "Limited Engagement Scale")
    draw_glowing_card(c, 70, 50, w, h, "3. TRUST GAP", ["Hidden Impact", "Legacy reporting", "Data silos"], "Poor Supporter Retention")
    draw_glowing_card(c, 70 + w + 40, 50, w, h, "4. NO PULSE", ["Weak Community", "Static interactions", "Passive audience"], "Fragmented Participant Base")
    
    c.showPage()

def slide_3_v4_feature_1(c):
    draw_beast_gradient(c, colors.white, colors.Color(0.96, 1, 0.96))
    draw_background_pattern(c, "waves")
    draw_beast_header(c, "F1: Smart Donation Hub", "The Strategic Core of Foundation Sustainability")
    
    # The Visual Treat: Emerald Pulse
    c.saveState()
    c.setFillColor(colors.Color(0, 0.6, 0, 0.05))
    for i in range(5):
        c.circle(400, 280, 100 + i*40, fill=1, stroke=0)
    c.setFillColor(colors.white)
    c.circle(400, 280, 120, fill=1, stroke=1)
    c.setFillColor(colors.Color(0, 0.6, 0, 1))
    c.setFont("Helvetica-Bold", 80)
    c.drawCentredString(400, 250, "$")
    c.restoreState()
    
    # Feature list & Benefits
    list_items = ["Donate Now Action", "Monthly Loyalty", "Live Fund Tracking", "Quick Pay Stack", "Transparency Node"]
    draw_glowing_card(c, 680, 100, 520, 420, "STRATEGIC CAPABILITY", list_items, "Higher Global Donation Conversion", colors.green)
    
    c.showPage()

def slide_4_v4_feature_2(c):
    draw_beast_gradient(c, colors.white, colors.Color(0.96, 0.96, 1))
    draw_background_pattern(c, "tech")
    draw_beast_header(c, "F2: Volunteer Portal", "Orchestrating Human Capital with Precision")
    
    # The Visual Treat: Neural Constellation
    c.saveState()
    pts = [(100, 480), (350, 480), (600, 480), (850, 480), (1100, 480)]
    c.setStrokeColor(colors.indigo)
    c.setLineWidth(4)
    c.line(100, 480, 1100, 480)
    for px, py in pts:
        c.setFillColor(colors.indigo)
        c.circle(px, py, 45, fill=1, stroke=0)
        c.setFillColor(colors.white)
        c.circle(px, py, 35, fill=1, stroke=0)
    c.restoreState()
    
    # Content cards
    draw_glowing_card(c, 70, 70, 550, 350, "PORTAL SYSTEMS", ["Digital Signup", "Skill Matrixing", "Calendar Sync", "Profile Auth"], "Zero Onboarding Friction")
    draw_glowing_card(c, 660, 70, 550, 350, "EXPECTED VALUE", ["Reduced Ops Load", "Talent Optimization", "Volunteer Loyalty", "Increased Reach"], "Improved Execution Metrics", colors.blue)
    
    c.showPage()

def slide_5_v4_feature_3(c):
    draw_beast_gradient(c, colors.Color(0.05, 0.05, 0.1), colors.Color(0.1, 0.1, 0.3))
    draw_background_pattern(c, "tech")
    draw_beast_header(c, "F3: Impact Dashboard", "Real-Time Proof of Global Transformation")
    
    # Massive Glowing Stats
    stats = [
        ("50,000+", "Meals Distributed", colors.orange, 70, 270),
        ("30,000+", "Interns Empowered", colors.cyan, 660, 270),
        ("100+", "Missions Led", colors.green, 70, 50),
        ("15+", "States Active", colors.red, 660, 50)
    ]
    
    for val, label, color, x, y in stats:
        c.saveState()
        c.setFillColor(colors.white)
        c.setFillAlpha(0.1)
        c.roundRect(x, y, 550, 180, 40, fill=1, stroke=1)
        c.setFillAlpha(1)
        c.setFillColor(color)
        c.setFont("Helvetica-Bold", 84)
        c.drawString(x + 40, y + 80, val)
        c.setFont("Helvetica-Bold", 24)
        c.setFillColor(colors.white)
        c.drawString(x + 40, y + 45, label.upper())
        c.restoreState()
        
    c.showPage()

def slide_6_v4_feature_4(c):
    draw_beast_gradient(c, colors.white, colors.Color(1, 0.96, 1))
    draw_background_pattern(c, "waves")
    draw_beast_header(c, "F4: Success Stories", "Emotional Storytelling as a Growth Lever")
    
    # The Visual Treat: Quote Hub
    c.saveState()
    c.setFillColor(colors.Color(0.8, 0.1, 0.5, 0.05))
    c.circle(PAGE_WIDTH/2, 280, 300, fill=1, stroke=0)
    
    c.setFillColor(colors.black)
    c.setFont("Helvetica-BoldOblique", 32)
    c.drawCentredString(PAGE_WIDTH/2, 350, "\"Technology provided the tools,\"")
    c.drawCentredString(PAGE_WIDTH/2, 300, "\"Digital Transparency provided the faith.\"")
    c.setFont("Helvetica-Bold", 22)
    c.setFillColor(colors.Color(0.8, 0.1, 0.5, 1))
    c.drawCentredString(PAGE_WIDTH/2, 240, "— Anita R., Community Leader")
    c.restoreState()
    
    # Feature nodes
    draw_glowing_card(c, 70, 70, 350, 180, "BENEFICIARY", ["Live Testimonials", "Story Maps"], None, colors.purple)
    draw_glowing_card(c, 465, 70, 350, 180, "VOLUNTEER", ["Impact Blogs", "Mentor Logs"], None, colors.purple)
    draw_glowing_card(c, 860, 70, 350, 180, "SOCIAL PROOF", ["Case Studies", "Press Kits"], None, colors.purple)
    
    c.showPage()

def slide_7_v4_feature_5(c):
    draw_beast_gradient(c, colors.white, colors.Color(0.96, 1, 0.96))
    draw_background_pattern(c, "tech")
    draw_beast_header(c, "F5: Campaign Center", "Mobilizing Communities for Collective Action")
    
    # The Visual Treat: Rocket Path
    c.saveState()
    c.setStrokeColor(colors.green)
    c.setLineWidth(10)
    c.line(100, 320, 1180, 320)
    c.setFillColor(colors.green)
    c.roundRect(100, 310, 950, 20, 10, fill=1, stroke=0)
    c.setFont("Helvetica-Bold", 24)
    c.drawString(100, 280, "BUILD-A-SCHOOL DRIVE")
    c.drawRightString(1180, 280, "85% COMPLETE")
    c.restoreState()
    
    # Outcome Cards
    draw_glowing_card(c, 70, 50, 550, 200, "VISIBILITY", ["Active Cards", "Event Hub"], "Max Exposure", colors.green)
    draw_glowing_card(c, 660, 50, 550, 200, "REACH", ["Skill Drives", "Awareness"], "Global Participation", colors.green)
    
    c.showPage()

def slide_8_v4_ai_vision(c):
    draw_beast_gradient(c, colors.black, colors.Color(0.05, 0.05, 0.1))
    draw_background_pattern(c, "tech")
    draw_beast_header(c, "AI-Powered NGO Future", "The Nexus of Intelligence and Global Good")
    
    # The Visual Treat: Cyber Grid
    c.saveState()
    c.setStrokeColor(colors.Color(0, 0.8, 1, 0.1))
    for i in range(0, PAGE_WIDTH, 20):
        c.line(i, 0, i, PAGE_HEIGHT)
    c.restoreState()
    
    # Matrix of Vision Nodes
    nodes = [
        ("AI MATCHMAKER", "Talent Logic", 100, 320),
        ("AI ANALYTICS", "Outcome Model", 420, 320),
        ("AI VOICE HUB", "Localization", 740, 320),
        ("NEURAL DONOR", "Personalization", 100, 200),
        ("PREDICTIVE", "Crisis Alert", 420, 200),
        ("BLOCKCHAIN", "Fiscal Truth", 740, 200)
    ]
    
    for tit, desc, nx, ny in nodes:
        c.saveState()
        c.setFillColor(colors.white)
        c.setFillAlpha(0.1)
        c.roundRect(nx, ny, 300, 100, 20, fill=1, stroke=1)
        c.setFillAlpha(1)
        c.setFillColor(colors.cyan)
        c.setFont("Helvetica-Bold", 22)
        c.drawString(nx+20, ny+60, tit)
        c.setFont("Helvetica", 12)
        c.setFillColor(colors.white)
        c.drawString(nx+20, ny+35, desc.upper())
        c.restoreState()
        
    # Final Statement Card
    c.saveState()
    c.setFillColor(colors.white)
    c.roundRect(100, 50, 1080, 120, 30, fill=1, stroke=0)
    c.setFillColor(colors.black)
    c.setFont("Helvetica-Bold", 24)
    c.drawCentredString(PAGE_WIDTH/2, 110, "RECOMMENDATION: TRANSFORMING NGOs THROUGH TECHNOLOGY,")
    c.drawCentredString(PAGE_WIDTH/2, 80, "TRANSPARENCY, AND ARTIFICIAL INTELLIGENCE.")
    c.restoreState()
    c.showPage()

def generate_pdf():
    filename = "BEAST_MODE_NGO_PROPOSAL.pdf"
    c = canvas.Canvas(filename, pagesize=(PAGE_WIDTH, PAGE_HEIGHT))
    
    slide_1_v4_cover(c)
    slide_2_v4_challenges(c)
    slide_3_v4_feature_1(c)
    slide_4_v4_feature_2(c)
    slide_5_v4_feature_3(c)
    slide_6_v4_feature_4(c)
    slide_7_v4_feature_5(c)
    slide_8_v4_ai_vision(c)
    
    c.save()
    print(f"Success: {filename} generated in Beast Mode.")

if __name__ == "__main__":
    generate_pdf()
