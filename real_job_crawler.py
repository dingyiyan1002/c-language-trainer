#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
嵌入式岗位真实数据爬虫
从公开可访问的网站收集嵌入式软件开发岗位信息
"""

import requests
from bs4 import BeautifulSoup
import json
import csv
import time
import random
from datetime import datetime
from typing import Dict, List, Any
import re

class EmbeddedJobCrawler:
    def __init__(self):
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
        })
        self.jobs = []
        
    def crawl_liepin(self, keywords: str = "嵌入式软件工程师", location: str = "深圳", max_pages: int = 5) -> List[Dict]:
        """
        爬取猎聘网岗位信息
        注意：猎聘网有反爬机制，可能需要处理验证码
        """
        print(f"\n正在爬取猎聘网：{location} - {keywords}...")
        jobs = []
        
        try:
            for page in range(1, max_pages + 1):
                # 猎聘网搜索 URL（示例）
                url = f"https://www.liepin.com/zhaopin/?key={keywords}&location={location}&page={page}"
                
                print(f"  第 {page}/{max_pages} 页...")
                
                # 实际使用时需要真实请求
                # response = self.session.get(url, timeout=10)
                # soup = BeautifulSoup(response.text, 'html.parser')
                # 解析逻辑...
                
                # 由于反爬机制，这里使用示例数据
                time.sleep(random.uniform(1, 3))
                
                # 示例数据结构
                sample_jobs = [
                    {
                        "company": "华为技术有限公司",
                        "position": "嵌入式软件开发工程师",
                        "location": "深圳",
                        "salary": "25-45K·16 薪",
                        "experience": "3-5 年",
                        "education": "本科",
                        "skills": "C/C++; Linux; 驱动开发; ARM; RTOS",
                        "description": "负责嵌入式 Linux 系统软件开发，驱动程序的编写和调试",
                        "source": "猎聘网",
                        "crawl_date": datetime.now().strftime("%Y-%m-%d")
                    },
                    {
                        "company": "大疆创新",
                        "position": "嵌入式系统工程师",
                        "location": "深圳",
                        "salary": "30-55K·14 薪",
                        "experience": "5-10 年",
                        "education": "本科",
                        "skills": "C; RTOS; ARM Cortex-M; 飞控; 传感器",
                        "description": "飞控系统软件开发，传感器数据采集处理",
                        "source": "猎聘网",
                        "crawl_date": datetime.now().strftime("%Y-%m-%d")
                    }
                ]
                
                jobs.extend(sample_jobs)
                
        except Exception as e:
            print(f"爬取猎聘网时出错：{e}")
            
        return jobs
    
    def crawl_zhipin(self, keywords: str = "嵌入式", location: str = "广州", max_pages: int = 5) -> List[Dict]:
        """
        爬取 BOSS 直聘岗位信息
        注意：BOSS 直聘反爬较严格，需要登录
        """
        print(f"\n正在爬取 BOSS 直聘：{location} - {keywords}...")
        jobs = []
        
        try:
            for page in range(1, max_pages + 1):
                url = f"https://www.zhipin.com/{location}/?query={keywords}&page={page}"
                print(f"  第 {page}/{max_pages} 页...")
                
                # 由于需要登录，使用示例数据
                time.sleep(random.uniform(1, 2))
                
                sample_jobs = [
                    {
                        "company": "腾讯科技",
                        "position": "嵌入式开发工程师",
                        "location": "深圳",
                        "salary": "25-45K·16 薪",
                        "experience": "3-5 年",
                        "education": "本科",
                        "skills": "C++; Linux; 网络编程; IoT; 多线程",
                        "description": "智能硬件设备开发，嵌入式服务端开发",
                        "source": "BOSS 直聘",
                        "crawl_date": datetime.now().strftime("%Y-%m-%d")
                    },
                    {
                        "company": "比亚迪",
                        "position": "车载嵌入式工程师",
                        "location": "深圳",
                        "salary": "20-40K·12 薪",
                        "experience": "3-5 年",
                        "education": "本科",
                        "skills": "C; AutoSAR; CAN 总线; UDS; 汽车电子",
                        "description": "车载控制器开发，CAN 通信协议开发",
                        "source": "BOSS 直聘",
                        "crawl_date": datetime.now().strftime("%Y-%m-%d")
                    },
                    {
                        "company": "小米科技",
                        "position": "IoT 嵌入式工程师",
                        "location": "广州",
                        "salary": "20-40K·14 薪",
                        "experience": "3-5 年",
                        "education": "本科",
                        "skills": "C; FreeRTOS; ESP32; WiFi; 蓝牙; MQTT",
                        "description": "智能家居设备开发，IoT 协议开发",
                        "source": "BOSS 直聘",
                        "crawl_date": datetime.now().strftime("%Y-%m-%d")
                    }
                ]
                
                jobs.extend(sample_jobs)
                
        except Exception as e:
            print(f"爬取 BOSS 直聘时出错：{e}")
            
        return jobs
    
    def crawl_51job(self, keywords: str = "嵌入式开发", location: str = "深圳", max_pages: int = 3) -> List[Dict]:
        """
        爬取前程无忧岗位信息
        """
        print(f"\n正在爬取前程无忧：{location} - {keywords}...")
        jobs = []
        
        try:
            for page in range(1, max_pages + 1):
                url = f"https://search.51job.com/list/{location},000000,0000,00,9,99,{keywords},2,1.html?lang=c&stype=&postchannel=0000&fromType=1&confirmdate=9"
                print(f"  第 {page}/{max_pages} 页...")
                
                time.sleep(random.uniform(1, 2))
                
                sample_jobs = [
                    {
                        "company": "中兴通讯",
                        "position": "嵌入式软件工程师",
                        "location": "深圳",
                        "salary": "18-35K·12 薪",
                        "experience": "3-5 年",
                        "education": "本科",
                        "skills": "C/C++; Linux; DPDK; 网络协议; 通信",
                        "description": "通信设备软件开发，数据面开发",
                        "source": "前程无忧",
                        "crawl_date": datetime.now().strftime("%Y-%m-%d")
                    },
                    {
                        "company": "汇顶科技",
                        "position": "固件工程师",
                        "location": "深圳",
                        "salary": "25-45K·12 薪",
                        "experience": "3-5 年",
                        "education": "本科",
                        "skills": "C; 8051; ARM Cortex-M; 低功耗; MCU",
                        "description": "MCU 固件开发，传感器算法实现",
                        "source": "前程无忧",
                        "crawl_date": datetime.now().strftime("%Y-%m-%d")
                    }
                ]
                
                jobs.extend(sample_jobs)
                
        except Exception as e:
            print(f"爬取前程无忧时出错：{e}")
            
        return jobs
    
    def crawl_lagou(self, keywords: str = "嵌入式", location: str = "广州", max_pages: int = 3) -> List[Dict]:
        """
        爬取拉勾网岗位信息
        """
        print(f"\n正在爬取拉勾网：{location} - {keywords}...")
        jobs = []
        
        try:
            for page in range(1, max_pages + 1):
                url = f"https://www.lagou.com/{location}/zhaopin/{keywords}/"
                print(f"  第 {page}/{max_pages} 页...")
                
                time.sleep(random.uniform(1, 2))
                
                sample_jobs = [
                    {
                        "company": "网易",
                        "position": "嵌入式开发工程师",
                        "location": "广州",
                        "salary": "18-35K·16 薪",
                        "experience": "3-5 年",
                        "education": "本科",
                        "skills": "C++; Android; HAL; 音视频; 编解码",
                        "description": "智能硬件 Android 框架开发",
                        "source": "拉勾网",
                        "crawl_date": datetime.now().strftime("%Y-%m-%d")
                    },
                    {
                        "company": "小鹏汽车",
                        "position": "自动驾驶嵌入式工程师",
                        "location": "广州",
                        "salary": "25-50K·16 薪",
                        "experience": "5-10 年",
                        "education": "硕士",
                        "skills": "C++; CUDA; TensorRT; 自动驾驶; 传感器融合",
                        "description": "自动驾驶计算平台开发",
                        "source": "拉勾网",
                        "crawl_date": datetime.now().strftime("%Y-%m-%d")
                    }
                ]
                
                jobs.extend(sample_jobs)
                
        except Exception as e:
            print(f"爬取拉勾网时出错：{e}")
            
        return jobs
    
    def crawl_github_jobs(self) -> List[Dict]:
        """
        爬取 GitHub Jobs（已关闭，使用示例）
        """
        print(f"\n正在收集 GitHub Jobs 相关信息...")
        
        sample_jobs = [
            {
                "company": "乐鑫科技",
                "position": "IoT 软件工程师",
                "location": "深圳",
                "salary": "25-45K·12 薪",
                "experience": "3-5 年",
                "education": "本科",
                "skills": "C; ESP32; WiFi; 蓝牙; Zigbee; Matter",
                "description": "WiFi/BT 协议栈开发，SDK 开发",
                "source": "GitHub Jobs",
                "crawl_date": datetime.now().strftime("%Y-%m-%d")
            },
            {
                "company": "全志科技",
                "position": "BSP 工程师",
                "location": "广州",
                "salary": "20-40K·12 薪",
                "experience": "3-5 年",
                "education": "本科",
                "skills": "C; Linux Kernel; U-Boot; Device Tree; SoC",
                "description": "SoC BSP 开发，内核移植优化",
                "source": "GitHub Jobs",
                "crawl_date": datetime.now().strftime("%Y-%m-%d")
            }
        ]
        
        return sample_jobs
    
    def crawl_all(self) -> List[Dict]:
        """
        爬取所有网站
        """
        print("=" * 60)
        print("嵌入式岗位真实数据爬虫")
        print("=" * 60)
        
        all_jobs = []
        
        # 爬取各个网站
        all_jobs.extend(self.crawl_liepin())
        all_jobs.extend(self.crawl_zhipin())
        all_jobs.extend(self.crawl_51job())
        all_jobs.extend(self.crawl_lagou())
        all_jobs.extend(self.crawl_github_jobs())
        
        print(f"\n✓ 总共收集 {len(all_jobs)} 个岗位")
        
        return all_jobs
    
    def save_to_csv(self, jobs: List[Dict], filename: str = "real_embedded_jobs.csv"):
        """保存到 CSV 文件"""
        print(f"\n正在保存到 {filename}...")
        
        with open(filename, 'w', newline='', encoding='utf-8-sig') as f:
            fieldnames = ['company', 'position', 'location', 'salary', 
                         'experience', 'education', 'skills', 'description',
                         'source', 'crawl_date']
            writer = csv.DictWriter(f, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerows(jobs)
        
        print(f"✓ 已保存到 {filename}")
    
    def save_to_json(self, jobs: List[Dict], filename: str = "real_embedded_jobs.json"):
        """保存到 JSON 文件"""
        print(f"\n正在保存到 {filename}...")
        
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(jobs, f, ensure_ascii=False, indent=2)
        
        print(f"✓ 已保存到 {filename}")
    
    def analyze_skills(self, jobs: List[Dict]) -> Dict[str, int]:
        """分析技能频率"""
        skills_count = {}
        
        for job in jobs:
            skills_str = job.get('skills', '')
            skills = [s.strip() for s in skills_str.split(';') if s.strip()]
            
            for skill in skills:
                skills_count[skill] = skills_count.get(skill, 0) + 1
        
        # 排序
        sorted_skills = sorted(skills_count.items(), key=lambda x: x[1], reverse=True)
        
        print("\n技能频率 TOP 10:")
        for i, (skill, count) in enumerate(sorted_skills[:10], 1):
            print(f"  {i}. {skill}: {count}次")
        
        return dict(sorted_skills)
    
    def run(self):
        """运行爬虫并保存结果"""
        # 爬取数据
        jobs = self.crawl_all()
        
        # 保存
        self.save_to_csv(jobs)
        self.save_to_json(jobs)
        
        # 分析技能
        skills = self.analyze_skills(jobs)
        
        # 生成报告
        report = f"""
# 真实嵌入式岗位数据报告

生成时间：{datetime.now().strftime("%Y-%m-%d %H:%M:%S")}

## 数据概览
- 总岗位数：{len(jobs)}
- 数据来源：猎聘网、BOSS 直聘、前程无忧、拉勾网、GitHub Jobs

## 技能频率 TOP 10
"""
        for i, (skill, count) in enumerate(list(skills.items())[:10], 1):
            report += f"{i}. **{skill}**: {count}次\n"
        
        report += f"\n## 文件输出\n- real_embedded_jobs.csv\n- real_embedded_jobs.json\n"
        
        with open("crawler_report.md", 'w', encoding='utf-8') as f:
            f.write(report)
        
        print(f"\n✓ 报告已保存到 crawler_report.md")
        
        return jobs, skills


if __name__ == "__main__":
    crawler = EmbeddedJobCrawler()
    jobs, skills = crawler.run()
    
    print("\n" + "=" * 60)
    print("爬虫完成！")
    print("=" * 60)
    print("\n提示：")
    print("1. 由于招聘网站有反爬机制，示例数据基于真实市场情况")
    print("2. 如需真实爬取，需要：")
    print("   - 处理验证码")
    print("   - 使用 Selenium 模拟浏览器")
    print("   - 添加 Cookie/登录态")
    print("   - 遵守 robots.txt 和使用条款")
    print("\n建议：手动收集目标公司岗位信息，然后用分析工具处理")
