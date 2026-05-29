"use client"

import { motion } from "framer-motion"
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  ResponsiveContainer,
  Tooltip
} from "recharts"
import { TrendingUp, Award, Users, Clock } from "lucide-react"

const successData = [
  { year: "2019", rate: 85 },
  { year: "2020", rate: 88 },
  { year: "2021", rate: 92 },
  { year: "2022", rate: 95 },
  { year: "2023", rate: 97 },
  { year: "2024", rate: 98 },
]

const stats = [
  { icon: TrendingUp, value: "98%", label: "Success Rate", color: "text-green-500" },
  { icon: Award, value: "500+", label: "Cases Won", color: "text-primary" },
  { icon: Users, value: "2500+", label: "Happy Clients", color: "text-blue-400" },
  { icon: Clock, value: "24-72h", label: "Response Time", color: "text-amber-400" },
]

export function SuccessRateSection() {
  return (
    <section id="why-choose" className="py-20 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Our Track Record
          </span>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Proven <span className="text-primary">Success</span> Rate
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Our dedication to excellence has resulted in consistently high success rates, 
            making us one of the most trusted cyber law firms in the region.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Chart */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border rounded-2xl p-6 lg:p-8"
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Success Rate Growth (2019-2024)
            </h3>
            <div className="h-64 lg:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={successData}>
                  <defs>
                    <linearGradient id="successGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(30, 60%, 45%)" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(30, 60%, 45%)" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis 
                    dataKey="year" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: 'hsl(30, 10%, 35%)', fontSize: 12 }}
                  />
                  <YAxis 
                    domain={[80, 100]}
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: 'hsl(30, 10%, 35%)', fontSize: 12 }}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(40, 30%, 97%)',
                      border: '1px solid hsl(40, 20%, 85%)',
                      borderRadius: '8px',
                      color: 'hsl(250, 10%, 20%)'
                    }}
                    formatter={(value: number) => [`${value}%`, 'Success Rate']}
                  />
                  <Area
                    type="monotone"
                    dataKey="rate"
                    stroke="hsl(30, 60%, 45%)"
                    strokeWidth={3}
                    fill="url(#successGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-card border border-border rounded-2xl p-6 text-center group hover:border-primary/50 transition-colors"
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary mb-4 ${stat.color}`}
                >
                  <stat.icon className="w-6 h-6" />
                </motion.div>
                <p className="text-3xl lg:text-4xl font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Credibility Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {["ISO Certified", "Bar Council Registered", "Data Protection Compliant", "Award Winning"].map((badge, index) => (
            <motion.div
              key={badge}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-6 py-3 bg-card border border-border rounded-full text-sm text-foreground/80 hover:border-primary/50 transition-colors"
            >
              <span className="text-primary mr-2">✓</span>
              {badge}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
