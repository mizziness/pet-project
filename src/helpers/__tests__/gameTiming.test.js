import { computeElapsedTicks } from '../gameTiming';
import { describe, it, expect } from '@jest/globals';

describe('gameTiming', () => {
  describe('computeElapsedTicks', () => {
    it('should return 0 ticks if lastProcessedAt is null', () => {
        const result = computeElapsedTicks(null, 5000, 1000);
        
        expect(result.elapsedTicks).toBe(0);
        expect(result.nextProcessedAt).toBe(5000);
    });

    it('should calculate ticks correctly', () => {
      const result = computeElapsedTicks(1000, 2500, 1000);
      
      expect(result.elapsedTicks).toBe(1);
      expect(result.nextProcessedAt).toBe(2000);
    });
  });
});