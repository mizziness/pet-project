import { computeElapsedTicks, initializeProcessedAt } from '../gameTiming';
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

  describe('initializeProcessedAt', () => {
    it('should return savedLastTick if it is greater than 0', () => {
      const result = initializeProcessedAt(1000, 5000);
      expect(result).toBe(1000);
    });

    it('should return fallbackNow if savedLastTick is 0 or less', () => {
      const result = initializeProcessedAt(0, 5000);
      expect(result).toBe(5000);
    });
  });

});