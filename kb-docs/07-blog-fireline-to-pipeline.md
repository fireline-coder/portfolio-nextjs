# Blog Post: From Fireline to Pipeline — What Wildland Firefighting Taught Me About Incident Response

By Max Ellis | April 2026

## Key Takeaways
- Incident response is about reading signals early — not reacting fast
- Communication under pressure is non-negotiable
- Discipline matters more than heroics

## Content

When people learn Max was a wildland firefighter before becoming a software engineer, they usually assume these are two completely unrelated chapters of his life. They're not. Nearly everything he learned on the fireline directly applies to how he handles production incidents.

### The Selection Process Sets the Tone

Out of 60+ trainees who started the wildfire training program, only 11 made it through. The program was a week of 8-hour classroom days covering fire behavior, safety protocols, and suppression tactics, followed by field exercises — digging line, deploying hose, learning to read terrain and weather. The 82% attrition rate wasn't just about physical fitness — it was about sustained focus, discipline, and composure under evaluation. Those same qualities determine who thrives during a production incident.

### Size Up Before You Act

In firefighting, you never just charge at a fire. You size up the situation first: What's the fuel? What's the terrain? What's the weather doing? The subtle details matter most. Debugging production issues feels remarkably similar. The obvious error in the stack trace is rarely the root cause. The UTF-8 corruption bug Max fixed at Act-On affected 70-80% of customer accounts, but it wasn't surfacing as a UTF-8 error. You had to read the signs carefully to trace it back to the actual cause.

### Communication Is Non-Negotiable

On a wildfire, they communicated fire behavior constantly — with their crew, with other teams on the ground, and with air attack overhead. If you saw the fire change behavior, you called it out immediately. In software, Max has carried that same discipline. When he sees something wrong in production — even if he's not sure it's a real problem yet — he communicates it.

### You Fight the Fire You Have, Not the One You Planned For

Real fires don't follow your playbook. The wind shifts. The terrain funnels the fire somewhere unexpected. You adapt or you're in trouble. Production incidents are the same. The best incident responders share this trait with the best firefighters: they stay calm, reassess, and adjust.

### Holding the Line

Building and holding fireline is unglamorous, exhausting work. It's not heroic. It's discipline. The engineering equivalent is the monitoring, alerting, and operational hygiene that prevents incidents in the first place. At Act-On, Max established comprehensive monitoring and alerting across key services that catches issues in real-time.

### The Transferable Truth

Firefighting taught Max that high-pressure situations reward preparation, communication, and humility. You don't panic. You don't freelance. You trust your training, communicate clearly, and adapt when the situation changes.
