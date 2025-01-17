"use client"

import { useProgress } from '../_contexts/ProgressContext'
import './ProgressBar.css'

export default function ProgressBar(){
    const {isProgressVisible} = useProgress();
    if(!isProgressVisible)return null;
    return(
        <div className="progress-bar">
            <div className="progress-value">
            </div>
        </div>
    )
}