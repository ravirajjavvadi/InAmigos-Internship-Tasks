import os
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import landscape
from reportlab.lib import colors
from reportlab.lib.units import inch
from reportlab.graphics.shapes import Drawing, Circle, Rect, Path, Group
from reportlab.graphics import renderPDF

# Setup 16:9 Page Size (Points)
PAGE_WIDTH = 1280
PAGE_HEIGHT = 720

def set_color(c, r, g, b, alpha=1):
    c.setFillColor(colors.Color(r/255, g/255, b/255, alpha))

def draw_vivid_gradient(c):
    """Draws a multi-stop heavenly gradient."""
    steps = 150
    step_w = PAGE_WIDTH / steps
    for i in range(steps):
        ratio = i / steps
        # Transition from Deep Indigo to Soft Amethyst to White/Blue
        if ratio < 0.5:
            r = 79/255 + (168/255 - 79/255) * (ratio * 2)
            g = 70/255 + (85/255 - 70/255) * (ratio * 2)
            b = 229/255 + (247/255 - 229/255) * (ratio * 2)
        else:
            r = 168/255 + (255/255 - 168/255) * ((ratio - 0.5) * 2)
            g = 85/255 + (255/255 - 85/255) * ((ratio - 0.5) * 2)
            b = 247/255 + (255/255 - 247/255) * ((ratio - 0.5) * 2)
        
        c.setFillColor(colors.Color(r, g, b, 0.1)) # Soft overlay
        c.rect(i * step_w, 0, step_w, PAGE_HEIGHT, stroke=0, fill=1)

def draw_abstract_blob(c, x, y, size, color):
    """Draws a soft glowing blob using alpha layers."""
    c.saveState()
    for i in range(10):
        alpha = (10 - i) * 0.02
        c.setFillColor(color)
        c.setFillAlpha(alpha)
        c.circle(x, y, size + (i * 20), stroke=0, fill=1)
    c.restoreState()

def draw_divine_card(c, x, y, w, h, title, text, accent_color):
    c.saveState()
    # Shadow
    c.setFillColor(colors.black)
    c.setFillAlpha(0.08)
    c.roundRect(x+10, y-10, w, h, 30, stroke=0, fill=1)
    # Glass Body
    c.setFillColor(colors.white)
    c.setFillAlpha(0.85)
    c.setStrokeColor(colors.Color(1, 1, 1, 0.5))
    c.setLineWidth(2)
    c.roundRect(x, y, w, h, 30, fill=1, stroke=1)
    
    # Accent bar
    c.setFillColor(accent_color)
    c.setFillAlpha(1)
    c.roundRect(x + 30, y + h - 60, 60, 8, 4, fill=1, stroke=0)
    
    # Title - BOLD & LARGE
    c.setFillColor(colors.black)
    c.setFont("Helvetica-Bold", 32)
    c.drawString(x + 30, y + h - 110, title)
    
    # Text - Substantial
    c.setFont("Helvetica", 18)
    c.setFillColor(colors.Color(0.2, 0.2, 0.3))
    text_obj = c.beginText(x + 30, y + h - 150)
    text_obj.setLeading(28)
    for line in text.split('\n'):
        text_obj.textLine(line)
    c.drawText(text_obj)
    c.restoreState()

def slide_1_heavenly_cover(c):
    draw_vivid_gradient(c)
    draw_abstract_blob(c, PAGE_WIDTH, PAGE_HEIGHT, 400, colors.indigo)
    draw_abstract_blob(c, 0, 0, 300, colors.purple)
    
    c.saveState()
    # Massive Header
    c.setFillColor(colors.indigo)
    c.setFont("Helvetica-Bold", 120)
    c.drawString(80, 480, "THE ELITE")
    c.drawString(80, 340, "REVOLUTION")
    
    # Subtle Overlay line
    c.setLineWidth(15)
    c.setStrokeColor(colors.indigo)
    c.line(80, 310, 600, 310)
    
    # Subtitle
    c.setFillColor(colors.black)
    c.setFont("Helvetica-Bold", 36)
    c.drawString(80, 240, "Social Impact Through Digital Supremacy")
    
    # Intern Info
    c.setFont("Helvetica", 24)
    c.setFillColor(colors.grey)
    c.drawString(80, 100, "Prepared by ")
    c.setFillColor(colors.indigo)
    c.setFont("Helvetica-Bold", 42)
    c.drawString(220, 95, "Javvadi Ravi Raj")
    c.setFont("Helvetica-Bold", 18)
    c.setFillColor(colors.grey)
    c.drawString(220, 65, "AI WEB DEVELOPMENT INTERN • INAMIGOS FOUNDATION")
    c.restoreState()
    c.showPage()

def slide_2_the_gap(c):
    draw_vivid_gradient(c)
    # Background Graphic
    c.setStrokeColor(colors.indigo)
    c.setLineWidth(0.5)
    c.setFillAlpha(0.05)
    c.circle(PAGE_WIDTH, 0, 800, fill=1, stroke=1)
    
    c.setFillColor(colors.indigo)
    c.setFont("Helvetica-Bold", 64)
    c.drawString(80, 600, "THE DIGITAL GAP")
    
    # 4 Massive Cards - justify by design
    gap = 60
    cw = (PAGE_WIDTH - 220) / 2
    ch = 230
    
    draw_divine_card(c, 80, 330, cw, ch, "VISIBILITY", "Donors wander in the dark.\nPathways are obscured by\nlegacy UI patterns.", colors.red)
    draw_divine_card(c, 80 + cw + gap, 330, cw, ch, "COMPLEXITY", "Onboarding kills momentum.\nManual flows deter the next\ngeneration of volunteers.", colors.orange)
    draw_divine_card(c, 80, 80, cw, ch, "TRANSPARENCY", "Impact is locked in PDF reports.\nReal-time faith requires\nreal-time data visibility.", colors.blue)
    draw_divine_card(c, 80 + cw + gap, 80, cw, ch, "BONDING", "Stories are missing life.\nSupporters need a heartbeat,\nnot just an about page.", colors.purple)
    
    c.showPage()

def slide_3_the_heart(c):
    draw_vivid_gradient(c)
    c.setFillColor(colors.indigo)
    c.setFont("Helvetica-Bold", 54)
    c.drawString(80, 620, "FEATURE 01: SMART DONATION HUB")
    
    # Visual Justification: The Pulsing Core
    draw_abstract_blob(c, 300, 300, 150, colors.red)
    c.setFillColor(colors.white)
    c.circle(300, 300, 100, fill=1, stroke=0)
    c.setFillColor(colors.red)
    c.setFont("Helvetica-Bold", 80)
    c.drawCentredString(300, 275, "$")
    
    # Floating Feature Nodes
    nodes = [
        (600, 450, "TIERED TILES", "Tangible impact naming."),
        (600, 350, "HYPER-SPEED", "One-tap donation logic."),
        (600, 250, "TRUST SEALS", "Verified blockchain-ready."),
        (600, 150, "SUBSCRIPTION", "Recurring impact engine.")
    ]
    
    for i, (x, y, tit, desc) in enumerate(nodes):
        c.saveState()
        # Connection line
        c.setStrokeColor(colors.red)
        c.setLineWidth(2)
        c.line(300, 300, x, y+20)
        
        c.setFillColor(colors.white)
        c.roundRect(x, y, 550, 80, 20, fill=1, stroke=0)
        c.setFillColor(colors.black)
        c.setFont("Helvetica-Bold", 24)
        c.drawString(x + 30, y + 45, tit)
        c.setFont("Helvetica", 16)
        c.setFillColor(colors.grey)
        c.drawString(x + 30, y + 20, desc)
        c.restoreState()
        
    c.showPage()

def slide_4_the_network(c):
    draw_vivid_gradient(c)
    c.setFillColor(colors.indigo)
    c.setFont("Helvetica-Bold", 54)
    c.drawString(80, 620, "FEATURE 02: VOLUNTEER NEURAL HUB")
    
    # Visual design: A constellation
    draw_abstract_blob(c, 400, 350, 200, colors.blue)
    
    # Large UI Mockup Card
    c.saveState()
    c.setFillColor(colors.white)
    c.roundRect(100, 100, 1080, 480, 40, fill=1, stroke=0)
    
    c.setFillColor(colors.black)
    c.setFont("Helvetica-Bold", 42)
    c.drawString(160, 480, "MATCHMAKING SYSTEM")
    
    # Skills grid
    skills = ["CODING", "TEACHING", "LEGAL", "DESIGN", "MEDICINE", "MARKETING"]
    for i, s in enumerate(skills):
        ix = 160 + (i % 3) * 350
        iy = 350 if i < 3 else 250
        c.setFillColor(colors.Color(0.9, 0.9, 1))
        c.roundRect(ix, iy, 300, 70, 15, fill=1, stroke=0)
        c.setFillColor(colors.indigo)
        c.setFont("Helvetica-Bold", 20)
        c.drawCentredString(ix + 150, iy + 25, s)
        
    c.setFillColor(colors.grey)
    c.setFont("Helvetica-Bold", 24)
    c.drawString(160, 180, "BENEFIT: 100% Alignment of Talent to Need.")
    c.restoreState()
    c.showPage()

def slide_5_the_proof(c):
    draw_vivid_gradient(c)
    c.setFillColor(colors.indigo)
    c.setFont("Helvetica-Bold", 64)
    c.drawString(80, 600, "THE ULTIMATE PROOF")
    
    stats = [
        ("50,000+", "LIVES TOUCHED", colors.indigo, 100, 300),
        ("100+", "MISSIONS LIVE", colors.green, 650, 300),
        ("30,000+", "INTERNS GUIDED", colors.purple, 100, 80),
        ("ALL-INDIA", "STRATEGIC REACH", colors.orange, 650, 80)
    ]
    
    for val, label, color, x, y in stats:
        c.saveState()
        c.setFillColor(colors.white)
        c.roundRect(x, y, 520, 180, 40, fill=1, stroke=0)
        # Glow
        c.setFillColor(color)
        c.setFillAlpha(0.1)
        c.circle(x+70, y+90, 80, fill=1, stroke=0)
        
        c.setFillColor(color)
        c.setFillAlpha(1)
        c.setFont("Helvetica-Bold", 72)
        c.drawString(x + 140, y + 90, val)
        c.setFont("Helvetica-Bold", 20)
        c.setFillColor(colors.grey)
        c.drawString(x + 140, y + 60, label)
        c.restoreState()
        
    c.showPage()

def slide_6_the_voice(c):
    draw_vivid_gradient(c)
    draw_abstract_blob(c, 0, 720, 400, colors.purple)
    
    c.setFillColor(colors.indigo)
    c.setFont("Helvetica-Bold", 64)
    c.drawString(80, 600, "THE HUMAN VOICE")
    
    # Large elegant quote
    c.setFillColor(colors.white)
    c.roundRect(100, 250, 1080, 300, 50, fill=1, stroke=0)
    
    c.setFillColor(colors.indigo)
    c.setFont("Helvetica-Bold", 120)
    c.drawString(140, 420, "“")
    
    c.setFillColor(colors.black)
    c.setFont("Helvetica-BoldOblique", 32)
    text_obj = c.beginText(180, 440)
    text_obj.setLeading(45)
    text_obj.textLine("The foundation transformed our local community.")
    text_obj.textLine("The digital transparency allowed us to trust the")
    text_obj.textLine("process and see our donations work instantly.")
    c.drawText(text_obj)
    
    c.setFont("Helvetica-Bold", 28)
    c.setFillColor(colors.indigo)
    c.drawRightString(1100, 300, "— Anita R., Community Lead")
    
    c.showPage()

def slide_7_the_mission(c):
    draw_vivid_gradient(c)
    c.setFillColor(colors.indigo)
    c.setFont("Helvetica-Bold", 64)
    c.drawString(80, 600, "THE MISSION CONTROL")
    
    # Visual: Giant progress bar centered
    c.setFillColor(colors.white)
    c.roundRect(100, 350, 1080, 180, 40, fill=1, stroke=0)
    
    c.setFillColor(colors.black)
    c.setFont("Helvetica-Bold", 32)
    c.drawString(160, 480, "BUILD-A-SCHOOL INITIATIVE")
    
    # Bar
    c.setFillColor(colors.Color(0.9, 0.9, 0.9))
    c.roundRect(160, 410, 960, 40, 20, fill=1, stroke=0)
    c.setFillColor(colors.green)
    c.roundRect(160, 410, 850, 40, 20, fill=1, stroke=0)
    
    c.setFont("Helvetica-Bold", 28)
    c.drawString(160, 375, "$21,250 RAISED")
    c.drawRightString(1120, 375, "85% COMPLETE")
    
    # Benefits deconstructed
    draw_divine_card(c, 100, 80, 1080, 220, "URGENCY & TRANPARENCY", "By visualizing the finish line, we trigger\ncollective action and ensure absolute fiscal\ntruth for every stakeholder.", colors.green)
    
    c.showPage()

def slide_8_the_future(c):
    draw_vivid_gradient(c)
    draw_abstract_blob(c, PAGE_WIDTH/2, PAGE_HEIGHT/2, 500, colors.indigo)
    
    c.saveState()
    c.setFillColor(colors.white)
    c.setFont("Helvetica-Bold", 54)
    c.drawCentredString(PAGE_WIDTH/2, 600, "THE AI-POWERED FUTURE")
    
    # Futuristic Nodes
    nodes = ["SMART MATCHMAKER", "PREDICTIVE ANALYTICS", "GLOBAL VOICE AI", "NEURAL IMPACT TRACKER"]
    for i, node in enumerate(nodes):
        x = 100 + (i % 2) * 550
        y = 350 if i < 2 else 150
        c.setFillColor(colors.white)
        c.setFillAlpha(0.05)
        c.roundRect(x, y, 500, 150, 30, fill=1, stroke=1)
        c.setFillAlpha(1)
        c.setFont("Helvetica-Bold", 32)
        c.drawCentredString(x + 250, y + 65, node)
        
    c.setFillColor(colors.white)
    c.setFont("Helvetica-Bold", 24)
    c.drawCentredString(PAGE_WIDTH/2, 60, "Transforming NGOs Through Digital Sovereignty & AI.")
    c.restoreState()
    c.showPage()

def generate_pdf():
    filename = "ELITE_NGO_TRANSFORMATION_DECK.pdf"
    c = canvas.Canvas(filename, pagesize=(PAGE_WIDTH, PAGE_HEIGHT))
    
    slide_1_heavenly_cover(c)
    slide_2_the_gap(c)
    slide_3_the_heart(c)
    slide_4_the_network(c)
    slide_5_the_proof(c)
    slide_6_the_voice(c)
    slide_7_the_mission(c)
    slide_8_the_future(c)
    
    c.save()
    print(f"Success: {filename} generated at elite fidelity.")

if __name__ == "__main__":
    generate_pdf()
