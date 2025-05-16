import React, { useState } from 'react';
import { Ruler, ArrowRight } from 'lucide-react';
import InfoTooltip from '../components/InfoTooltip';
import '../styles/LogCalculator.css';

const LogCalculator: React.FC = () => {
    const [diameterL, setDiameterL] = useState('');
    const [diameterR, setDiameterR] = useState('');
    const [length, setLength] = useState('');
    const [output, setOutput] = useState('');
    const [isCalculated, setIsCalculated] = useState(false);
    const [hasError, setHasError] = useState(false);

    const calculateVolume = () => {
        const dL = parseFloat(diameterL);
        const dR = parseFloat(diameterR);
        const len = parseFloat(length);

        if (isNaN(dL) || isNaN(dR) || isNaN(len) || dL <= 0 || dR <= 0 || len <= 0) {
            setOutput("Please enter valid positive numbers for all measurements");
            setHasError(true);
            setIsCalculated(true);
            return;
        }

        const diameter = ((dL / 100) + (dR / 100)) / 2;
        const radius = diameter / 2;
        const volume = Math.PI * Math.pow(radius, 2) * len;

        setOutput(`${volume.toFixed(3)}`);
        setHasError(false);
        setIsCalculated(true);
    };

    const handleReset = () => {
        setDiameterL('');
        setDiameterR('');
        setLength('');
        setOutput('');
        setIsCalculated(false);
        setHasError(false);
    };

    const tooltipContent = "This calculator uses the formula: V = π × r² × l, where r is the average radius from both ends, and l is the length of the log. Diameter measurements should be in centimeters and length in meters.";

    return (
        <div className="calculator-container">
            <div className="calculator-card">
                <div className="calculator-header">
                    <div className="header-content">
                        <h1 className="header-title">
                            Wood Log Cubic Meter Calculator
                            <InfoTooltip content={tooltipContent} />
                        </h1>
                        <Ruler color ="#fff" className="h-8 w-8" />
                    </div>
                    <p className="header-description">
                        Calculate the volume of logs based on diameter and length measurements
                    </p>
                </div>

                <div className="calculator-body calculator-grid">
                    <div className="input-section">
                        <div className="input-group">
                            <div className="input-field">
                                <label className="input-label">
                                    Diameter Left End (cm):
                                </label>
                                <div className="input-container">
                                    <input
                                        type="number"
                                        value={diameterL}
                                        onChange={(e) => setDiameterL(e.target.value)}
                                        className="input"
                                        placeholder="Enter diameter"
                                    />
                                    <div className="input-unit">cm</div>
                                </div>
                            </div>

                            <div className="input-field">
                                <label className="input-label">
                                    Diameter Right End (cm):
                                </label>
                                <div className="input-container">
                                    <input
                                        type="number"
                                        value={diameterR}
                                        onChange={(e) => setDiameterR(e.target.value)}
                                        className="input"
                                        placeholder="Enter diameter"
                                    />
                                    <div className="input-unit">cm</div>
                                </div>
                            </div>
                        </div>

                        <div className="input-field">
                            <label className="input-label">
                                Log Length (m):
                            </label>
                            <div className="input-container">
                                <input
                                    type="number"
                                    value={length}
                                    onChange={(e) => setLength(e.target.value)}
                                    className="input"
                                    placeholder="Enter length"
                                />
                                <div className="input-unit">m</div>
                            </div>
                        </div>

                        <div className="button-group">
                            <button
                                onClick={calculateVolume}
                                className="button button-primary"
                            >
                                Calculate Volume
                            </button>

                            <button
                                onClick={handleReset}
                                className="button button-secondary"
                            >
                                Reset
                            </button>
                        </div>
                    </div>

                    <div className="result-section">
                        <div className="result-content">
                            <h2 className="result-title">Result</h2>

                            {isCalculated ? (
                                <div className={hasError ? 'result-error' : 'result-value'}>
                                    {hasError ? (
                                        <p>{output}</p>
                                    ) : (
                                        <>
                                            <div className="result-value">
                                                <ArrowRight className="h-5 w-5 mr-2 text-green-600 animate-pulse" />
                                                <p>{output}</p>
                                                <span className="result-unit">m³</span>
                                            </div>
                                            <p className="result-description">cubic meters of wood</p>
                                        </>
                                    )}
                                </div>
                            ) : (
                                <p className="text-lg text-gray-500">Enter measurements and click calculate</p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="calculator-footer">
                    <p className="footer-note">
                        Note: This calculator assumes the log is approximately cylindrical, using the average of the diameters from both ends.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LogCalculator;