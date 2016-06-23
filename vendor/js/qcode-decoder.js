! function(e, t) {
    "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? module.exports = t() : e.qrcode = t()
}(this, function() {
    function e(e, t) {
        this.count = e, this.dataCodewords = t, Object.defineProperties(this, {
            Count: {
                get: function() {
                    return this.count
                }
            },
            DataCodewords: {
                get: function() {
                    return this.dataCodewords
                }
            }
        })
    }

    function t(e, t, r) {
        this.ecCodewordsPerBlock = e, this.ecBlocks = r ? new Array(t, r) : new Array(t), Object.defineProperties(this, {
            ECCodewordsPerBlock: {
                get: function() {
                    return this.ecCodewordsPerBlock
                }
            },
            TotalECCodewords: {
                get: function() {
                    return this.ecCodewordsPerBlock * this.NumBlocks
                }
            },
            NumBlocks: {
                get: function() {
                    for (var e = 0, t = 0; t < this.ecBlocks.length; t++) e += this.ecBlocks[t].length;
                    return e
                }
            }
        }), this.getECBlocks = function() {
            return this.ecBlocks
        }
    }

    function r(e, t, r, n, i, o) {
        this.versionNumber = e, this.alignmentPatternCenters = t, this.ecBlocks = new Array(r, n, i, o);
        for (var a = 0, s = r.ECCodewordsPerBlock, h = r.getECBlocks(), w = 0; w < h.length; w++) {
            var c = h[w];
            a += c.Count * (c.DataCodewords + s)
        }
        this.totalCodewords = a, Object.defineProperties(this, {
            VersionNumber: {
                get: function() {
                    return this.versionNumber
                }
            },
            AlignmentPatternCenters: {
                get: function() {
                    return this.alignmentPatternCenters
                }
            },
            TotalCodewords: {
                get: function() {
                    return this.totalCodewords
                }
            },
            DimensionForVersion: {
                get: function() {
                    return 17 + 4 * this.versionNumber
                }
            }
        }), this.buildFunctionPattern = function() {
            var e = this.DimensionForVersion,
                t = new d(e);
            t.setRegion(0, 0, 9, 9), t.setRegion(e - 8, 0, 8, 9), t.setRegion(0, e - 8, 9, 8);
            for (var r = this.alignmentPatternCenters.length, n = 0; r > n; n++)
                for (var i = this.alignmentPatternCenters[n] - 2, o = 0; r > o; o++) 0 == n && (0 == o || o == r - 1) || n == r - 1 && 0 == o || t.setRegion(this.alignmentPatternCenters[o] - 2, i, 5, 5);
            return t.setRegion(6, 9, 1, e - 17), t.setRegion(9, 6, e - 17, 1), this.versionNumber > 6 && (t.setRegion(e - 11, 0, 3, 6), t.setRegion(0, e - 11, 6, 3)), t
        }, this.getECBlocksForLevel = function(e) {
            return this.ecBlocks[e.ordinal()]
        }
    }

    function n() {
        return new Array(new r(1, new Array, new t(7, new e(1, 19)), new t(10, new e(1, 16)), new t(13, new e(1, 13)), new t(17, new e(1, 9))), new r(2, new Array(6, 18), new t(10, new e(1, 34)), new t(16, new e(1, 28)), new t(22, new e(1, 22)), new t(28, new e(1, 16))), new r(3, new Array(6, 22), new t(15, new e(1, 55)), new t(26, new e(1, 44)), new t(18, new e(2, 17)), new t(22, new e(2, 13))), new r(4, new Array(6, 26), new t(20, new e(1, 80)), new t(18, new e(2, 32)), new t(26, new e(2, 24)), new t(16, new e(4, 9))), new r(5, new Array(6, 30), new t(26, new e(1, 108)), new t(24, new e(2, 43)), new t(18, new e(2, 15), new e(2, 16)), new t(22, new e(2, 11), new e(2, 12))), new r(6, new Array(6, 34), new t(18, new e(2, 68)), new t(16, new e(4, 27)), new t(24, new e(4, 19)), new t(28, new e(4, 15))), new r(7, new Array(6, 22, 38), new t(20, new e(2, 78)), new t(18, new e(4, 31)), new t(18, new e(2, 14), new e(4, 15)), new t(26, new e(4, 13), new e(1, 14))), new r(8, new Array(6, 24, 42), new t(24, new e(2, 97)), new t(22, new e(2, 38), new e(2, 39)), new t(22, new e(4, 18), new e(2, 19)), new t(26, new e(4, 14), new e(2, 15))), new r(9, new Array(6, 26, 46), new t(30, new e(2, 116)), new t(22, new e(3, 36), new e(2, 37)), new t(20, new e(4, 16), new e(4, 17)), new t(24, new e(4, 12), new e(4, 13))), new r(10, new Array(6, 28, 50), new t(18, new e(2, 68), new e(2, 69)), new t(26, new e(4, 43), new e(1, 44)), new t(24, new e(6, 19), new e(2, 20)), new t(28, new e(6, 15), new e(2, 16))), new r(11, new Array(6, 30, 54), new t(20, new e(4, 81)), new t(30, new e(1, 50), new e(4, 51)), new t(28, new e(4, 22), new e(4, 23)), new t(24, new e(3, 12), new e(8, 13))), new r(12, new Array(6, 32, 58), new t(24, new e(2, 92), new e(2, 93)), new t(22, new e(6, 36), new e(2, 37)), new t(26, new e(4, 20), new e(6, 21)), new t(28, new e(7, 14), new e(4, 15))), new r(13, new Array(6, 34, 62), new t(26, new e(4, 107)), new t(22, new e(8, 37), new e(1, 38)), new t(24, new e(8, 20), new e(4, 21)), new t(22, new e(12, 11), new e(4, 12))), new r(14, new Array(6, 26, 46, 66), new t(30, new e(3, 115), new e(1, 116)), new t(24, new e(4, 40), new e(5, 41)), new t(20, new e(11, 16), new e(5, 17)), new t(24, new e(11, 12), new e(5, 13))), new r(15, new Array(6, 26, 48, 70), new t(22, new e(5, 87), new e(1, 88)), new t(24, new e(5, 41), new e(5, 42)), new t(30, new e(5, 24), new e(7, 25)), new t(24, new e(11, 12), new e(7, 13))), new r(16, new Array(6, 26, 50, 74), new t(24, new e(5, 98), new e(1, 99)), new t(28, new e(7, 45), new e(3, 46)), new t(24, new e(15, 19), new e(2, 20)), new t(30, new e(3, 15), new e(13, 16))), new r(17, new Array(6, 30, 54, 78), new t(28, new e(1, 107), new e(5, 108)), new t(28, new e(10, 46), new e(1, 47)), new t(28, new e(1, 22), new e(15, 23)), new t(28, new e(2, 14), new e(17, 15))), new r(18, new Array(6, 30, 56, 82), new t(30, new e(5, 120), new e(1, 121)), new t(26, new e(9, 43), new e(4, 44)), new t(28, new e(17, 22), new e(1, 23)), new t(28, new e(2, 14), new e(19, 15))), new r(19, new Array(6, 30, 58, 86), new t(28, new e(3, 113), new e(4, 114)), new t(26, new e(3, 44), new e(11, 45)), new t(26, new e(17, 21), new e(4, 22)), new t(26, new e(9, 13), new e(16, 14))), new r(20, new Array(6, 34, 62, 90), new t(28, new e(3, 107), new e(5, 108)), new t(26, new e(3, 41), new e(13, 42)), new t(30, new e(15, 24), new e(5, 25)), new t(28, new e(15, 15), new e(10, 16))), new r(21, new Array(6, 28, 50, 72, 94), new t(28, new e(4, 116), new e(4, 117)), new t(26, new e(17, 42)), new t(28, new e(17, 22), new e(6, 23)), new t(30, new e(19, 16), new e(6, 17))), new r(22, new Array(6, 26, 50, 74, 98), new t(28, new e(2, 111), new e(7, 112)), new t(28, new e(17, 46)), new t(30, new e(7, 24), new e(16, 25)), new t(24, new e(34, 13))), new r(23, new Array(6, 30, 54, 74, 102), new t(30, new e(4, 121), new e(5, 122)), new t(28, new e(4, 47), new e(14, 48)), new t(30, new e(11, 24), new e(14, 25)), new t(30, new e(16, 15), new e(14, 16))), new r(24, new Array(6, 28, 54, 80, 106), new t(30, new e(6, 117), new e(4, 118)), new t(28, new e(6, 45), new e(14, 46)), new t(30, new e(11, 24), new e(16, 25)), new t(30, new e(30, 16), new e(2, 17))), new r(25, new Array(6, 32, 58, 84, 110), new t(26, new e(8, 106), new e(4, 107)), new t(28, new e(8, 47), new e(13, 48)), new t(30, new e(7, 24), new e(22, 25)), new t(30, new e(22, 15), new e(13, 16))), new r(26, new Array(6, 30, 58, 86, 114), new t(28, new e(10, 114), new e(2, 115)), new t(28, new e(19, 46), new e(4, 47)), new t(28, new e(28, 22), new e(6, 23)), new t(30, new e(33, 16), new e(4, 17))), new r(27, new Array(6, 34, 62, 90, 118), new t(30, new e(8, 122), new e(4, 123)), new t(28, new e(22, 45), new e(3, 46)), new t(30, new e(8, 23), new e(26, 24)), new t(30, new e(12, 15), new e(28, 16))), new r(28, new Array(6, 26, 50, 74, 98, 122), new t(30, new e(3, 117), new e(10, 118)), new t(28, new e(3, 45), new e(23, 46)), new t(30, new e(4, 24), new e(31, 25)), new t(30, new e(11, 15), new e(31, 16))), new r(29, new Array(6, 30, 54, 78, 102, 126), new t(30, new e(7, 116), new e(7, 117)), new t(28, new e(21, 45), new e(7, 46)), new t(30, new e(1, 23), new e(37, 24)), new t(30, new e(19, 15), new e(26, 16))), new r(30, new Array(6, 26, 52, 78, 104, 130), new t(30, new e(5, 115), new e(10, 116)), new t(28, new e(19, 47), new e(10, 48)), new t(30, new e(15, 24), new e(25, 25)), new t(30, new e(23, 15), new e(25, 16))), new r(31, new Array(6, 30, 56, 82, 108, 134), new t(30, new e(13, 115), new e(3, 116)), new t(28, new e(2, 46), new e(29, 47)), new t(30, new e(42, 24), new e(1, 25)), new t(30, new e(23, 15), new e(28, 16))), new r(32, new Array(6, 34, 60, 86, 112, 138), new t(30, new e(17, 115)), new t(28, new e(10, 46), new e(23, 47)), new t(30, new e(10, 24), new e(35, 25)), new t(30, new e(19, 15), new e(35, 16))), new r(33, new Array(6, 30, 58, 86, 114, 142), new t(30, new e(17, 115), new e(1, 116)), new t(28, new e(14, 46), new e(21, 47)), new t(30, new e(29, 24), new e(19, 25)), new t(30, new e(11, 15), new e(46, 16))), new r(34, new Array(6, 34, 62, 90, 118, 146), new t(30, new e(13, 115), new e(6, 116)), new t(28, new e(14, 46), new e(23, 47)), new t(30, new e(44, 24), new e(7, 25)), new t(30, new e(59, 16), new e(1, 17))), new r(35, new Array(6, 30, 54, 78, 102, 126, 150), new t(30, new e(12, 121), new e(7, 122)), new t(28, new e(12, 47), new e(26, 48)), new t(30, new e(39, 24), new e(14, 25)), new t(30, new e(22, 15), new e(41, 16))), new r(36, new Array(6, 24, 50, 76, 102, 128, 154), new t(30, new e(6, 121), new e(14, 122)), new t(28, new e(6, 47), new e(34, 48)), new t(30, new e(46, 24), new e(10, 25)), new t(30, new e(2, 15), new e(64, 16))), new r(37, new Array(6, 28, 54, 80, 106, 132, 158), new t(30, new e(17, 122), new e(4, 123)), new t(28, new e(29, 46), new e(14, 47)), new t(30, new e(49, 24), new e(10, 25)), new t(30, new e(24, 15), new e(46, 16))), new r(38, new Array(6, 32, 58, 84, 110, 136, 162), new t(30, new e(4, 122), new e(18, 123)), new t(28, new e(13, 46), new e(32, 47)), new t(30, new e(48, 24), new e(14, 25)), new t(30, new e(42, 15), new e(32, 16))), new r(39, new Array(6, 26, 54, 82, 110, 138, 166), new t(30, new e(20, 117), new e(4, 118)), new t(28, new e(40, 47), new e(7, 48)), new t(30, new e(43, 24), new e(22, 25)), new t(30, new e(10, 15), new e(67, 16))), new r(40, new Array(6, 30, 58, 86, 114, 142, 170), new t(30, new e(19, 118), new e(6, 119)), new t(28, new e(18, 47), new e(31, 48)), new t(30, new e(34, 24), new e(34, 25)), new t(30, new e(20, 15), new e(61, 16))))
    }

    function i(e, t, r, n, o, a, s, h, d) {
        this.a11 = e, this.a12 = n, this.a13 = s, this.a21 = t, this.a22 = o, this.a23 = h, this.a31 = r, this.a32 = a, this.a33 = d, this.transformPoints1 = function(e) {
            for (var t = e.length, r = this.a11, n = this.a12, i = this.a13, o = this.a21, a = this.a22, s = this.a23, h = this.a31, d = this.a32, w = this.a33, c = 0; t > c; c += 2) {
                var f = e[c],
                    u = e[c + 1],
                    l = i * f + s * u + w;
                e[c] = (r * f + o * u + h) / l, e[c + 1] = (n * f + a * u + d) / l
            }
        }, this.transformPoints2 = function(e, t) {
            for (var r = e.length, n = 0; r > n; n++) {
                var i = e[n],
                    o = t[n],
                    a = this.a13 * i + this.a23 * o + this.a33;
                e[n] = (this.a11 * i + this.a21 * o + this.a31) / a, t[n] = (this.a12 * i + this.a22 * o + this.a32) / a
            }
        }, this.buildAdjoint = function() {
            return new i(this.a22 * this.a33 - this.a23 * this.a32, this.a23 * this.a31 - this.a21 * this.a33, this.a21 * this.a32 - this.a22 * this.a31, this.a13 * this.a32 - this.a12 * this.a33, this.a11 * this.a33 - this.a13 * this.a31, this.a12 * this.a31 - this.a11 * this.a32, this.a12 * this.a23 - this.a13 * this.a22, this.a13 * this.a21 - this.a11 * this.a23, this.a11 * this.a22 - this.a12 * this.a21)
        }, this.times = function(e) {
            return new i(this.a11 * e.a11 + this.a21 * e.a12 + this.a31 * e.a13, this.a11 * e.a21 + this.a21 * e.a22 + this.a31 * e.a23, this.a11 * e.a31 + this.a21 * e.a32 + this.a31 * e.a33, this.a12 * e.a11 + this.a22 * e.a12 + this.a32 * e.a13, this.a12 * e.a21 + this.a22 * e.a22 + this.a32 * e.a23, this.a12 * e.a31 + this.a22 * e.a32 + this.a32 * e.a33, this.a13 * e.a11 + this.a23 * e.a12 + this.a33 * e.a13, this.a13 * e.a21 + this.a23 * e.a22 + this.a33 * e.a23, this.a13 * e.a31 + this.a23 * e.a32 + this.a33 * e.a33)
        }
    }

    function o(e, t) {
        this.bits = e, this.points = t
    }

    function a(e) {
        this.image = e, this.resultPointCallback = null, this.sizeOfBlackWhiteBlackRun = function(e, t, r, n) {
            var i = Math.abs(n - t) > Math.abs(r - e);
            if (i) {
                var o = e;
                e = t, t = o, o = r, r = n, n = o
            }
            for (var a = Math.abs(r - e), s = Math.abs(n - t), h = -a >> 1, d = n > t ? 1 : -1, w = r > e ? 1 : -1, c = 0, f = e, u = t; f != r; f += w) {
                var l = i ? u : f,
                    g = i ? f : u;
                if (1 == c ? this.image[l + g * qrcode.width] && c++ : this.image[l + g * qrcode.width] || c++, 3 == c) {
                    var v = f - e,
                        m = u - t;
                    return Math.sqrt(v * v + m * m)
                }
                if (h += s, h > 0) {
                    if (u == n) break;
                    u += d, h -= a
                }
            }
            var p = r - e,
                y = n - t;
            return Math.sqrt(p * p + y * y)
        }, this.sizeOfBlackWhiteBlackRunBothWays = function(e, t, r, n) {
            var i = this.sizeOfBlackWhiteBlackRun(e, t, r, n),
                o = 1,
                a = e - (r - e);
            0 > a ? (o = e / (e - a), a = 0) : a >= qrcode.width && (o = (qrcode.width - 1 - e) / (a - e), a = qrcode.width - 1);
            var s = Math.floor(t - (n - t) * o);
            return o = 1, 0 > s ? (o = t / (t - s), s = 0) : s >= qrcode.height && (o = (qrcode.height - 1 - t) / (s - t), s = qrcode.height - 1), a = Math.floor(e + (a - e) * o), i += this.sizeOfBlackWhiteBlackRun(e, t, a, s), i - 1
        }, this.calculateModuleSizeOneWay = function(e, t) {
            var r = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(e.X), Math.floor(e.Y), Math.floor(t.X), Math.floor(t.Y)),
                n = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(t.X), Math.floor(t.Y), Math.floor(e.X), Math.floor(e.Y));
            return isNaN(r) ? n / 7 : isNaN(n) ? r / 7 : (r + n) / 14
        }, this.calculateModuleSize = function(e, t, r) {
            return (this.calculateModuleSizeOneWay(e, t) + this.calculateModuleSizeOneWay(e, r)) / 2
        }, this.distance = function(e, t) {
            return xDiff = e.X - t.X, yDiff = e.Y - t.Y, Math.sqrt(xDiff * xDiff + yDiff * yDiff)
        }, this.computeDimension = function(e, t, r, n) {
            var i = Math.round(this.distance(e, t) / n),
                o = Math.round(this.distance(e, r) / n),
                a = (i + o >> 1) + 7;
            switch (3 & a) {
                case 0:
                    a++;
                    break;
                case 2:
                    a--;
                    break;
                case 3:
                    throw "Error"
            }
            return a
        }, this.findAlignmentInRegion = function(e, t, r, n) {
            var i = Math.floor(n * e),
                o = Math.max(0, t - i),
                a = Math.min(qrcode.width - 1, t + i);
            if (3 * e > a - o) throw "Error";
            var s = Math.max(0, r - i),
                h = Math.min(qrcode.height - 1, r + i),
                d = new D(this.image, o, s, a - o, h - s, e, this.resultPointCallback);
            return d.find()
        }, this.createTransform = function(e, t, r, n, o) {
            var a, s, h, d, w = o - 3.5;
            null != n ? (a = n.X, s = n.Y, h = d = w - 3) : (a = t.X - e.X + r.X, s = t.Y - e.Y + r.Y, h = d = w);
            var c = i.quadrilateralToQuadrilateral(3.5, 3.5, w, 3.5, h, d, 3.5, w, e.X, e.Y, t.X, t.Y, a, s, r.X, r.Y);
            return c
        }, this.sampleGrid = function(e, t, r) {
            var n = GridSampler;
            return n.sampleGrid3(e, r, t)
        }, this.processFinderPatternInfo = function(e) {
            var t = e.TopLeft,
                n = e.TopRight,
                i = e.BottomLeft,
                a = this.calculateModuleSize(t, n, i);
            if (1 > a) throw "Error";
            var s = this.computeDimension(t, n, i, a),
                h = r.getProvisionalVersionForDimension(s),
                d = h.DimensionForVersion - 7,
                w = null;
            if (h.AlignmentPatternCenters.length > 0)
                for (var c = n.X - t.X + i.X, f = n.Y - t.Y + i.Y, u = 1 - 3 / d, l = Math.floor(t.X + u * (c - t.X)), g = Math.floor(t.Y + u * (f - t.Y)), v = 4; 16 >= v; v <<= 1) {
                    w = this.findAlignmentInRegion(a, l, g, v);
                    break
                }
            var m, p = this.createTransform(t, n, i, w, s),
                y = this.sampleGrid(this.image, p, s);
            return m = null == w ? new Array(i, t, n) : new Array(i, t, n, w), new o(y, m)
        }, this.detect = function() {
            var e = (new S).findFinderPattern(this.image);
            return this.processFinderPatternInfo(e)
        }
    }

    function s(e) {
        this.errorCorrectionLevel = h.forBits(e >> 3 & 3), this.dataMask = 7 & e, Object.defineProperties(this, {
            ErrorCorrectionLevel: {
                get: function() {
                    return this.errorCorrectionLevel
                }
            },
            DataMask: {
                get: function() {
                    return this.dataMask
                }
            }
        }), this.GetHashCode = function() {
            return this.errorCorrectionLevel.ordinal() << 3 | dataMask
        }, this.Equals = function(e) {
            var t = e;
            return this.errorCorrectionLevel == t.errorCorrectionLevel && this.dataMask == t.dataMask
        }
    }

    function h(e, t, r) {
        this.ordinal_Renamed_Field = e, this.bits = t, this.name = r, Object.defineProperties(this, {
            Bits: {
                get: function() {
                    return this.bits
                }
            },
            Name: {
                get: function() {
                    return this.name
                }
            }
        }), this.ordinal = function() {
            return this.ordinal_Renamed_Field
        }
    }

    function d(e, t) {
        if (t || (t = e), 1 > e || 1 > t) throw "Both dimensions must be greater than 0";
        this.width = e, this.height = t;
        var r = e >> 5;
        0 != (31 & e) && r++, this.rowSize = r, this.bits = new Array(r * t);
        for (var n = 0; n < this.bits.length; n++) this.bits[n] = 0;
        Object.defineProperties(this, {
            Width: {
                get: function() {
                    return this.width
                }
            },
            Height: {
                get: function() {
                    return this.height
                }
            },
            Dimension: {
                get: function() {
                    if (this.width != this.height) throw "Can't call getDimension() on a non-square matrix";
                    return this.width
                }
            }
        }), this.get_Renamed = function(e, t) {
            var r = t * this.rowSize + (e >> 5);
            return 0 != (1 & q(this.bits[r], 31 & e))
        }, this.set_Renamed = function(e, t) {
            var r = t * this.rowSize + (e >> 5);
            this.bits[r] |= 1 << (31 & e)
        }, this.flip = function(e, t) {
            var r = t * this.rowSize + (e >> 5);
            this.bits[r] ^= 1 << (31 & e)
        }, this.clear = function() {
            for (var e = this.bits.length, t = 0; e > t; t++) this.bits[t] = 0
        }, this.setRegion = function(e, t, r, n) {
            if (0 > t || 0 > e) throw "Left and top must be nonnegative";
            if (1 > n || 1 > r) throw "Height and width must be at least 1";
            var i = e + r,
                o = t + n;
            if (o > this.height || i > this.width) throw "The region must fit inside the matrix";
            for (var a = t; o > a; a++)
                for (var s = a * this.rowSize, h = e; i > h; h++) this.bits[s + (h >> 5)] |= 1 << (31 & h)
        }
    }

    function w(e, t) {
        this.numDataCodewords = e, this.codewords = t, Object.defineProperties(this, {
            NumDataCodewords: {
                get: function() {
                    return this.numDataCodewords
                }
            },
            Codewords: {
                get: function() {
                    return this.codewords
                }
            }
        })
    }

    function c(e) {
        var t = e.Dimension;
        if (21 > t || 1 != (3 & t)) throw "Error BitMatrixParser";
        this.bitMatrix = e, this.parsedVersion = null, this.parsedFormatInfo = null, this.copyBit = function(e, t, r) {
            return this.bitMatrix.get_Renamed(e, t) ? r << 1 | 1 : r << 1
        }, this.readFormatInformation = function() {
            if (null != this.parsedFormatInfo) return this.parsedFormatInfo;
            for (var e = 0, t = 0; 6 > t; t++) e = this.copyBit(t, 8, e);
            e = this.copyBit(7, 8, e), e = this.copyBit(8, 8, e), e = this.copyBit(8, 7, e);
            for (var r = 5; r >= 0; r--) e = this.copyBit(8, r, e);
            if (this.parsedFormatInfo = s.decodeFormatInformation(e), null != this.parsedFormatInfo) return this.parsedFormatInfo;
            var n = this.bitMatrix.Dimension;
            e = 0;
            for (var i = n - 8, t = n - 1; t >= i; t--) e = this.copyBit(t, 8, e);
            for (var r = n - 7; n > r; r++) e = this.copyBit(8, r, e);
            if (this.parsedFormatInfo = s.decodeFormatInformation(e), null != this.parsedFormatInfo) return this.parsedFormatInfo;
            throw "Error readFormatInformation"
        }, this.readVersion = function() {
            if (null != this.parsedVersion) return this.parsedVersion;
            var e = this.bitMatrix.Dimension,
                t = e - 17 >> 2;
            if (6 >= t) return r.getVersionForNumber(t);
            for (var n = 0, i = e - 11, o = 5; o >= 0; o--)
                for (var a = e - 9; a >= i; a--) n = this.copyBit(a, o, n);
            if (this.parsedVersion = r.decodeVersionInformation(n), null != this.parsedVersion && this.parsedVersion.DimensionForVersion == e) return this.parsedVersion;
            n = 0;
            for (var a = 5; a >= 0; a--)
                for (var o = e - 9; o >= i; o--) n = this.copyBit(a, o, n);
            if (this.parsedVersion = r.decodeVersionInformation(n), null != this.parsedVersion && this.parsedVersion.DimensionForVersion == e) return this.parsedVersion;
            throw "Error readVersion"
        }, this.readCodewords = function() {
            var e = this.readFormatInformation(),
                t = this.readVersion(),
                r = DataMask.forReference(e.DataMask),
                n = this.bitMatrix.Dimension;
            r.unmaskBitMatrix(this.bitMatrix, n);
            for (var i = t.buildFunctionPattern(), o = !0, a = new Array(t.TotalCodewords), s = 0, h = 0, d = 0, w = n - 1; w > 0; w -= 2) {
                6 == w && w--;
                for (var c = 0; n > c; c++)
                    for (var f = o ? n - 1 - c : c, u = 0; 2 > u; u++) i.get_Renamed(w - u, f) || (d++, h <<= 1, this.bitMatrix.get_Renamed(w - u, f) && (h |= 1), 8 == d && (a[s++] = h, d = 0, h = 0));
                o ^= !0
            }
            if (s != t.TotalCodewords) throw "Error readCodewords";
            return a
        }
    }

    function f() {
        this.unmaskBitMatrix = function(e, t) {
            for (var r = 0; t > r; r++)
                for (var n = 0; t > n; n++) this.isMasked(r, n) && e.flip(n, r)
        }, this.isMasked = function(e, t) {
            return 0 == (e + t & 1)
        }
    }

    function u() {
        this.unmaskBitMatrix = function(e, t) {
            for (var r = 0; t > r; r++)
                for (var n = 0; t > n; n++) this.isMasked(r, n) && e.flip(n, r)
        }, this.isMasked = function(e) {
            return 0 == (1 & e)
        }
    }

    function l() {
        this.unmaskBitMatrix = function(e, t) {
            for (var r = 0; t > r; r++)
                for (var n = 0; t > n; n++) this.isMasked(r, n) && e.flip(n, r)
        }, this.isMasked = function(e, t) {
            return t % 3 == 0
        }
    }

    function g() {
        this.unmaskBitMatrix = function(e, t) {
            for (var r = 0; t > r; r++)
                for (var n = 0; t > n; n++) this.isMasked(r, n) && e.flip(n, r)
        }, this.isMasked = function(e, t) {
            return (e + t) % 3 == 0
        }
    }

    function v() {
        this.unmaskBitMatrix = function(e, t) {
            for (var r = 0; t > r; r++)
                for (var n = 0; t > n; n++) this.isMasked(r, n) && e.flip(n, r)
        }, this.isMasked = function(e, t) {
            return 0 == (q(e, 1) + t / 3 & 1)
        }
    }

    function m() {
        this.unmaskBitMatrix = function(e, t) {
            for (var r = 0; t > r; r++)
                for (var n = 0; t > n; n++) this.isMasked(r, n) && e.flip(n, r)
        }, this.isMasked = function(e, t) {
            var r = e * t;
            return (1 & r) + r % 3 == 0
        }
    }

    function y() {
        this.unmaskBitMatrix = function(e, t) {
            for (var r = 0; t > r; r++)
                for (var n = 0; t > n; n++) this.isMasked(r, n) && e.flip(n, r)
        }, this.isMasked = function(e, t) {
            var r = e * t;
            return 0 == ((1 & r) + r % 3 & 1)
        }
    }

    function b() {
        this.unmaskBitMatrix = function(e, t) {
            for (var r = 0; t > r; r++)
                for (var n = 0; t > n; n++) this.isMasked(r, n) && e.flip(n, r)
        }, this.isMasked = function(e, t) {
            return 0 == ((e + t & 1) + e * t % 3 & 1)
        }
    }

    function C(e) {
        this.field = e, this.decode = function(e, t) {
            for (var r = new M(this.field, e), n = new Array(t), i = 0; i < n.length; i++) n[i] = 0;
            for (var o = !1, a = !0, i = 0; t > i; i++) {
                var s = r.evaluateAt(this.field.exp(o ? i + 1 : i));
                n[n.length - 1 - i] = s, 0 != s && (a = !1)
            }
            if (!a)
                for (var h = new M(this.field, n), d = this.runEuclideanAlgorithm(this.field.buildMonomial(t, 1), h, t), w = d[0], c = d[1], f = this.findErrorLocations(w), u = this.findErrorMagnitudes(c, f, o), i = 0; i < f.length; i++) {
                    var l = e.length - 1 - this.field.log(f[i]);
                    if (0 > l) throw "ReedSolomonException Bad error location";
                    e[l] = A.addOrSubtract(e[l], u[i])
                }
        }, this.runEuclideanAlgorithm = function(e, t, r) {
            if (e.Degree < t.Degree) {
                var n = e;
                e = t, t = n
            }
            for (var i = e, o = t, a = this.field.One, s = this.field.Zero, h = this.field.Zero, d = this.field.One; o.Degree >= Math.floor(r / 2);) {
                var w = i,
                    c = a,
                    f = h;
                if (i = o, a = s, h = d, i.Zero) throw "r_{i-1} was zero";
                o = w;
                for (var u = this.field.Zero, l = i.getCoefficient(i.Degree), g = this.field.inverse(l); o.Degree >= i.Degree && !o.Zero;) {
                    var v = o.Degree - i.Degree,
                        m = this.field.multiply(o.getCoefficient(o.Degree), g);
                    u = u.addOrSubtract(this.field.buildMonomial(v, m)), o = o.addOrSubtract(i.multiplyByMonomial(v, m))
                }
                s = u.multiply1(a).addOrSubtract(c), d = u.multiply1(h).addOrSubtract(f)
            }
            var p = d.getCoefficient(0);
            if (0 == p) throw "ReedSolomonException sigmaTilde(0) was zero";
            var y = this.field.inverse(p),
                b = d.multiply2(y),
                C = o.multiply2(y);
            return new Array(b, C)
        }, this.findErrorLocations = function(e) {
            var t = e.Degree;
            if (1 == t) return new Array(e.getCoefficient(1));
            for (var r = new Array(t), n = 0, i = 1; 256 > i && t > n; i++) 0 == e.evaluateAt(i) && (r[n] = this.field.inverse(i), n++);
            if (n != t) throw "Error locator degree does not match number of roots";
            return r
        }, this.findErrorMagnitudes = function(e, t, r) {
            for (var n = t.length, i = new Array(n), o = 0; n > o; o++) {
                for (var a = this.field.inverse(t[o]), s = 1, h = 0; n > h; h++) o != h && (s = this.field.multiply(s, A.addOrSubtract(1, this.field.multiply(t[h], a))));
                i[o] = this.field.multiply(e.evaluateAt(a), this.field.inverse(s)), r && (i[o] = this.field.multiply(i[o], a))
            }
            return i
        }
    }

    function M(e, t) {
        if (null == t || 0 == t.length) throw "System.ArgumentException";
        this.field = e;
        var r = t.length;
        if (r > 1 && 0 == t[0]) {
            for (var n = 1; r > n && 0 == t[n];) n++;
            if (n == r) this.coefficients = e.Zero.coefficients;
            else {
                this.coefficients = new Array(r - n);
                for (var i = 0; i < this.coefficients.length; i++) this.coefficients[i] = 0;
                for (var o = 0; o < this.coefficients.length; o++) this.coefficients[o] = t[n + o]
            }
        } else this.coefficients = t;
        Object.defineProperties(this, {
            Zero: {
                get: function() {
                    return 0 == this.coefficients[0]
                }
            },
            Degree: {
                get: function() {
                    return this.coefficients.length - 1
                }
            },
            Coefficients: {
                get: function() {
                    return this.coefficients
                }
            }
        }), this.getCoefficient = function(e) {
            return this.coefficients[this.coefficients.length - 1 - e]
        }, this.evaluateAt = function(e) {
            if (0 == e) return this.getCoefficient(0);
            var t = this.coefficients.length;
            if (1 == e) {
                for (var r = 0, n = 0; t > n; n++) r = A.addOrSubtract(r, this.coefficients[n]);
                return r
            }
            for (var i = this.coefficients[0], n = 1; t > n; n++) i = A.addOrSubtract(this.field.multiply(e, i), this.coefficients[n]);
            return i
        }, this.addOrSubtract = function(t) {
            if (this.field != t.field) throw "GF256Polys do not have same GF256 field";
            if (this.Zero) return t;
            if (t.Zero) return this;
            var r = this.coefficients,
                n = t.coefficients;
            if (r.length > n.length) {
                var i = r;
                r = n, n = i
            }
            for (var o = new Array(n.length), a = n.length - r.length, s = 0; a > s; s++) o[s] = n[s];
            for (var h = a; h < n.length; h++) o[h] = A.addOrSubtract(r[h - a], n[h]);
            return new M(e, o)
        }, this.multiply1 = function(e) {
            if (this.field != e.field) throw "GF256Polys do not have same GF256 field";
            if (this.Zero || e.Zero) return this.field.Zero;
            for (var t = this.coefficients, r = t.length, n = e.coefficients, i = n.length, o = new Array(r + i - 1), a = 0; r > a; a++)
                for (var s = t[a], h = 0; i > h; h++) o[a + h] = A.addOrSubtract(o[a + h], this.field.multiply(s, n[h]));
            return new M(this.field, o)
        }, this.multiply2 = function(e) {
            if (0 == e) return this.field.Zero;
            if (1 == e) return this;
            for (var t = this.coefficients.length, r = new Array(t), n = 0; t > n; n++) r[n] = this.field.multiply(this.coefficients[n], e);
            return new M(this.field, r)
        }, this.multiplyByMonomial = function(e, t) {
            if (0 > e) throw "System.ArgumentException";
            if (0 == t) return this.field.Zero;
            for (var r = this.coefficients.length, n = new Array(r + e), i = 0; i < n.length; i++) n[i] = 0;
            for (var i = 0; r > i; i++) n[i] = this.field.multiply(this.coefficients[i], t);
            return new M(this.field, n)
        }, this.divide = function(e) {
            if (this.field != e.field) throw "GF256Polys do not have same GF256 field";
            if (e.Zero) throw "Divide by 0";
            for (var t = this.field.Zero, r = this, n = e.getCoefficient(e.Degree), i = this.field.inverse(n); r.Degree >= e.Degree && !r.Zero;) {
                var o = r.Degree - e.Degree,
                    a = this.field.multiply(r.getCoefficient(r.Degree), i),
                    s = e.multiplyByMonomial(o, a),
                    h = this.field.buildMonomial(o, a);
                t = t.addOrSubtract(h), r = r.addOrSubtract(s)
            }
            return new Array(t, r)
        }
    }

    function A(e) {
        this.expTable = new Array(256), this.logTable = new Array(256);
        for (var t = 1, r = 0; 256 > r; r++) this.expTable[r] = t, t <<= 1, t >= 256 && (t ^= e);
        for (var r = 0; 255 > r; r++) this.logTable[this.expTable[r]] = r;
        var n = new Array(1);
        n[0] = 0, this.zero = new M(this, new Array(n));
        var i = new Array(1);
        i[0] = 1, this.one = new M(this, new Array(i)), Object.defineProperties(this, {
            Zero: {
                get: function() {
                    return this.zero
                }
            },
            One: {
                get: function() {
                    return this.one
                }
            }
        }), this.buildMonomial = function(e, t) {
            if (0 > e) throw "System.ArgumentException";
            if (0 == t) return zero;
            for (var r = new Array(e + 1), n = 0; n < r.length; n++) r[n] = 0;
            return r[0] = t, new M(this, r)
        }, this.exp = function(e) {
            return this.expTable[e]
        }, this.log = function(e) {
            if (0 == e) throw "System.ArgumentException";
            return this.logTable[e]
        }, this.inverse = function(e) {
            if (0 == e) throw "System.ArithmeticException";
            return this.expTable[255 - this.logTable[e]]
        }, this.multiply = function(e, t) {
            return 0 == e || 0 == t ? 0 : 1 == e ? t : 1 == t ? e : this.expTable[(this.logTable[e] + this.logTable[t]) % 255]
        }
    }

    function q(e, t) {
        return e >= 0 ? e >> t : (e >> t) + (2 << ~t)
    }

    function k(e, t, r) {
        this.x = e, this.y = t, this.count = 1, this.estimatedModuleSize = r, Object.defineProperties(this, {
            EstimatedModuleSize: {
                get: function() {
                    return this.estimatedModuleSize
                }
            },
            Count: {
                get: function() {
                    return this.count
                }
            },
            X: {
                get: function() {
                    return this.x
                }
            },
            Y: {
                get: function() {
                    return this.y
                }
            }
        }), this.incrementCount = function() {
            this.count++
        }, this.aboutEquals = function(e, t, r) {
            if (Math.abs(t - this.y) <= e && Math.abs(r - this.x) <= e) {
                var n = Math.abs(e - this.estimatedModuleSize);
                return 1 >= n || n / this.estimatedModuleSize <= 1
            }
            return !1
        }
    }

    function P(e) {
        this.bottomLeft = e[0], this.topLeft = e[1], this.topRight = e[2], Object.defineProperties(this, {
            BottomLeft: {
                get: function() {
                    return this.bottomLeft
                }
            },
            TopLeft: {
                get: function() {
                    return this.topLeft
                }
            },
            TopRight: {
                get: function() {
                    return this.topRight
                }
            }
        })
    }

    function S() {
        this.image = null, this.possibleCenters = [], this.hasSkipped = !1, this.crossCheckStateCount = new Array(0, 0, 0, 0, 0), this.resultPointCallback = null, Object.defineProperty(this, "CrossCheckStateCount", {
            get: function() {
                return this.crossCheckStateCount[0] = 0, this.crossCheckStateCount[1] = 0, this.crossCheckStateCount[2] = 0, this.crossCheckStateCount[3] = 0, this.crossCheckStateCount[4] = 0, this.crossCheckStateCount
            }
        }), this.foundPatternCross = function(e) {
            for (var t = 0, r = 0; 5 > r; r++) {
                var n = e[r];
                if (0 == n) return !1;
                t += n
            }
            if (7 > t) return !1;
            var i = Math.floor((t << _) / 7),
                o = Math.floor(i / 2);
            return Math.abs(i - (e[0] << _)) < o && Math.abs(i - (e[1] << _)) < o && Math.abs(3 * i - (e[2] << _)) < 3 * o && Math.abs(i - (e[3] << _)) < o && Math.abs(i - (e[4] << _)) < o
        }, this.centerFromEnd = function(e, t) {
            return t - e[4] - e[3] - e[2] / 2
        }, this.crossCheckVertical = function(e, t, r, n) {
            for (var i = this.image, o = qrcode.height, a = this.CrossCheckStateCount, s = e; s >= 0 && i[t + s * qrcode.width];) a[2]++, s--;
            if (0 > s) return 0 / 0;
            for (; s >= 0 && !i[t + s * qrcode.width] && a[1] <= r;) a[1]++, s--;
            if (0 > s || a[1] > r) return 0 / 0;
            for (; s >= 0 && i[t + s * qrcode.width] && a[0] <= r;) a[0]++, s--;
            if (a[0] > r) return 0 / 0;
            for (s = e + 1; o > s && i[t + s * qrcode.width];) a[2]++, s++;
            if (s == o) return 0 / 0;
            for (; o > s && !i[t + s * qrcode.width] && a[3] < r;) a[3]++, s++;
            if (s == o || a[3] >= r) return 0 / 0;
            for (; o > s && i[t + s * qrcode.width] && a[4] < r;) a[4]++, s++;
            if (a[4] >= r) return 0 / 0;
            var h = a[0] + a[1] + a[2] + a[3] + a[4];
            return 5 * Math.abs(h - n) >= 2 * n ? 0 / 0 : this.foundPatternCross(a) ? this.centerFromEnd(a, s) : 0 / 0
        }, this.crossCheckHorizontal = function(e, t, r, n) {
            for (var i = this.image, o = qrcode.width, a = this.CrossCheckStateCount, s = e; s >= 0 && i[s + t * qrcode.width];) a[2]++, s--;
            if (0 > s) return 0 / 0;
            for (; s >= 0 && !i[s + t * qrcode.width] && a[1] <= r;) a[1]++, s--;
            if (0 > s || a[1] > r) return 0 / 0;
            for (; s >= 0 && i[s + t * qrcode.width] && a[0] <= r;) a[0]++, s--;
            if (a[0] > r) return 0 / 0;
            for (s = e + 1; o > s && i[s + t * qrcode.width];) a[2]++, s++;
            if (s == o) return 0 / 0;
            for (; o > s && !i[s + t * qrcode.width] && a[3] < r;) a[3]++, s++;
            if (s == o || a[3] >= r) return 0 / 0;
            for (; o > s && i[s + t * qrcode.width] && a[4] < r;) a[4]++, s++;
            if (a[4] >= r) return 0 / 0;
            var h = a[0] + a[1] + a[2] + a[3] + a[4];
            return 5 * Math.abs(h - n) >= n ? 0 / 0 : this.foundPatternCross(a) ? this.centerFromEnd(a, s) : 0 / 0
        }, this.handlePossibleCenter = function(e, t, r) {
            var n = e[0] + e[1] + e[2] + e[3] + e[4],
                i = this.centerFromEnd(e, r),
                o = this.crossCheckVertical(t, Math.floor(i), e[2], n);
            if (!isNaN(o) && (i = this.crossCheckHorizontal(Math.floor(i), Math.floor(o), e[2], n), !isNaN(i))) {
                for (var a = n / 7, s = !1, h = this.possibleCenters.length, d = 0; h > d; d++) {
                    var w = this.possibleCenters[d];
                    if (w.aboutEquals(a, o, i)) {
                        w.incrementCount(), s = !0;
                        break
                    }
                }
                if (!s) {
                    var c = new k(i, o, a);
                    this.possibleCenters.push(c), null != this.resultPointCallback && this.resultPointCallback.foundPossibleResultPoint(c)
                }
                return !0
            }
            return !1
        }, this.selectBestPatterns = function() {
            var e = this.possibleCenters.length;
            if (3 > e) throw "Couldn't find enough finder patterns";
            if (e > 3) {
                for (var t = 0, r = 0, n = 0; e > n; n++) {
                    var i = this.possibleCenters[n].EstimatedModuleSize;
                    t += i, r += i * i
                }
                var o = t / e;
                this.possibleCenters.sort(function(e, t) {
                    var r = Math.abs(t.EstimatedModuleSize - o),
                        n = Math.abs(e.EstimatedModuleSize - o);
                    return n > r ? -1 : r == n ? 0 : 1
                });
                for (var a = Math.sqrt(r / e - o * o), s = Math.max(.2 * o, a), n = 0; n < this.possibleCenters.length && this.possibleCenters.length > 3; n++) {
                    var h = this.possibleCenters[n];
                    Math.abs(h.EstimatedModuleSize - o) > s && (this.possibleCenters.remove(n), n--)
                }
            }
            return this.possibleCenters.length > 3 && this.possibleCenters.sort(function(e, t) {
                return e.count > t.count ? -1 : e.count < t.count ? 1 : 0
            }), new Array(this.possibleCenters[0], this.possibleCenters[1], this.possibleCenters[2])
        }, this.findRowSkip = function() {
            var e = this.possibleCenters.length;
            if (1 >= e) return 0;
            for (var t = null, r = 0; e > r; r++) {
                var n = this.possibleCenters[r];
                if (n.Count >= X) {
                    if (null != t) return this.hasSkipped = !0, Math.floor((Math.abs(t.X - n.X) - Math.abs(t.Y - n.Y)) / 2);
                    t = n
                }
            }
            return 0
        }, this.haveMultiplyConfirmedCenters = function() {
            for (var e = 0, t = 0, r = this.possibleCenters.length, n = 0; r > n; n++) {
                var i = this.possibleCenters[n];
                i.Count >= X && (e++, t += i.EstimatedModuleSize)
            }
            if (3 > e) return !1;
            for (var o = t / r, a = 0, n = 0; r > n; n++) i = this.possibleCenters[n], a += Math.abs(i.EstimatedModuleSize - o);
            return .05 * t >= a
        }, this.findFinderPattern = function(e) {
            var t = !1;
            this.image = e;
            var r = qrcode.height,
                n = qrcode.width,
                i = Math.floor(3 * r / (4 * L));
            (V > i || t) && (i = V);
            for (var o = !1, a = new Array(5), s = i - 1; r > s && !o; s += i) {
                a[0] = 0, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0;
                for (var h = 0, d = 0; n > d; d++)
                    if (e[d + s * qrcode.width]) 1 == (1 & h) && h++, a[h]++;
                    else if (0 == (1 & h))
                    if (4 == h)
                        if (this.foundPatternCross(a)) {
                            var w = this.handlePossibleCenter(a, s, d);
                            if (w)
                                if (i = 2, this.hasSkipped) o = this.haveMultiplyConfirmedCenters();
                                else {
                                    var c = this.findRowSkip();
                                    c > a[2] && (s += c - a[2] - i, d = n - 1)
                                }
                            else {
                                do d++; while (n > d && !e[d + s * qrcode.width]);
                                d--
                            }
                            h = 0, a[0] = 0, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0
                        } else a[0] = a[2], a[1] = a[3], a[2] = a[4], a[3] = 1, a[4] = 0, h = 3;
                else a[++h]++;
                else a[h]++;
                if (this.foundPatternCross(a)) {
                    var w = this.handlePossibleCenter(a, s, n);
                    w && (i = a[0], this.hasSkipped && (o = haveMultiplyConfirmedCenters()))
                }
            }
            var f = this.selectBestPatterns();
            return qrcode.orderBestPatterns(f), new P(f)
        }
    }

    function E(e, t, r) {
        this.x = e, this.y = t, this.count = 1, this.estimatedModuleSize = r, Object.defineProperties(this, {
            EstimatedModuleSize: {
                get: function() {
                    return this.estimatedModuleSize
                }
            },
            Count: {
                get: function() {
                    return this.count
                }
            },
            X: {
                get: function() {
                    return Math.floor(this.x)
                }
            },
            Y: {
                get: function() {
                    return Math.floor(this.y)
                }
            }
        }), this.incrementCount = function() {
            this.count++
        }, this.aboutEquals = function(e, t, r) {
            if (Math.abs(t - this.y) <= e && Math.abs(r - this.x) <= e) {
                var n = Math.abs(e - this.estimatedModuleSize);
                return 1 >= n || n / this.estimatedModuleSize <= 1
            }
            return !1
        }
    }

    function D(e, t, r, n, i, o, a) {
        this.image = e, this.possibleCenters = new Array, this.startX = t, this.startY = r, this.width = n, this.height = i, this.moduleSize = o, this.crossCheckStateCount = new Array(0, 0, 0), this.resultPointCallback = a, this.centerFromEnd = function(e, t) {
            return t - e[2] - e[1] / 2
        }, this.foundPatternCross = function(e) {
            for (var t = this.moduleSize, r = t / 2, n = 0; 3 > n; n++)
                if (Math.abs(t - e[n]) >= r) return !1;
            return !0
        }, this.crossCheckVertical = function(e, t, r, n) {
            var i = this.image,
                o = qrcode.height,
                a = this.crossCheckStateCount;
            a[0] = 0, a[1] = 0, a[2] = 0;
            for (var s = e; s >= 0 && i[t + s * qrcode.width] && a[1] <= r;) a[1]++, s--;
            if (0 > s || a[1] > r) return 0 / 0;
            for (; s >= 0 && !i[t + s * qrcode.width] && a[0] <= r;) a[0]++, s--;
            if (a[0] > r) return 0 / 0;
            for (s = e + 1; o > s && i[t + s * qrcode.width] && a[1] <= r;) a[1]++, s++;
            if (s == o || a[1] > r) return 0 / 0;
            for (; o > s && !i[t + s * qrcode.width] && a[2] <= r;) a[2]++, s++;
            if (a[2] > r) return 0 / 0;
            var h = a[0] + a[1] + a[2];
            return 5 * Math.abs(h - n) >= 2 * n ? 0 / 0 : this.foundPatternCross(a) ? this.centerFromEnd(a, s) : 0 / 0
        }, this.handlePossibleCenter = function(e, t, r) {
            var n = e[0] + e[1] + e[2],
                i = this.centerFromEnd(e, r),
                o = this.crossCheckVertical(t, Math.floor(i), 2 * e[1], n);
            if (!isNaN(o)) {
                for (var a = (e[0] + e[1] + e[2]) / 3, s = this.possibleCenters.length, h = 0; s > h; h++) {
                    var d = this.possibleCenters[h];
                    if (d.aboutEquals(a, o, i)) return new E(i, o, a)
                }
                var w = new E(i, o, a);
                this.possibleCenters.push(w), null != this.resultPointCallback && this.resultPointCallback.foundPossibleResultPoint(w)
            }
            return null
        }, this.find = function() {
            for (var t = this.startX, i = this.height, o = t + n, a = r + (i >> 1), s = new Array(0, 0, 0), h = 0; i > h; h++) {
                var d = a + (0 == (1 & h) ? h + 1 >> 1 : -(h + 1 >> 1));
                s[0] = 0, s[1] = 0, s[2] = 0;
                for (var w = t; o > w && !e[w + qrcode.width * d];) w++;
                for (var c = 0; o > w;) {
                    if (e[w + d * qrcode.width])
                        if (1 == c) s[c]++;
                        else if (2 == c) {
                        if (this.foundPatternCross(s)) {
                            var f = this.handlePossibleCenter(s, d, w);
                            if (null != f) return f
                        }
                        s[0] = s[2], s[1] = 1, s[2] = 0, c = 1
                    } else s[++c]++;
                    else 1 == c && c++, s[c]++;
                    w++
                }
                if (this.foundPatternCross(s)) {
                    var f = this.handlePossibleCenter(s, d, o);
                    if (null != f) return f
                }
            }
            if (0 != this.possibleCenters.length) return this.possibleCenters[0];
            throw "Couldn't find enough alignment patterns"
        }
    }

    function x(e, t, r) {
        this.blockPointer = 0, this.bitPointer = 7, this.dataLength = 0, this.blocks = e, this.numErrorCorrectionCode = r, 9 >= t ? this.dataLengthMode = 0 : t >= 10 && 26 >= t ? this.dataLengthMode = 1 : t >= 27 && 40 >= t && (this.dataLengthMode = 2), this.getNextBits = function(e) {
            var t = 0;
            if (e < this.bitPointer + 1) {
                for (var r = 0, n = 0; e > n; n++) r += 1 << n;
                return r <<= this.bitPointer - e + 1, t = (this.blocks[this.blockPointer] & r) >> this.bitPointer - e + 1, this.bitPointer -= e, t
            }
            if (e < this.bitPointer + 1 + 8) {
                for (var i = 0, n = 0; n < this.bitPointer + 1; n++) i += 1 << n;
                return t = (this.blocks[this.blockPointer] & i) << e - (this.bitPointer + 1), this.blockPointer++, t += this.blocks[this.blockPointer] >> 8 - (e - (this.bitPointer + 1)), this.bitPointer = this.bitPointer - e % 8, this.bitPointer < 0 && (this.bitPointer = 8 + this.bitPointer), t
            }
            if (e < this.bitPointer + 1 + 16) {
                for (var i = 0, o = 0, n = 0; n < this.bitPointer + 1; n++) i += 1 << n;
                var a = (this.blocks[this.blockPointer] & i) << e - (this.bitPointer + 1);
                this.blockPointer++;
                var s = this.blocks[this.blockPointer] << e - (this.bitPointer + 1 + 8);
                this.blockPointer++;
                for (var n = 0; n < e - (this.bitPointer + 1 + 8); n++) o += 1 << n;
                o <<= 8 - (e - (this.bitPointer + 1 + 8));
                var h = (this.blocks[this.blockPointer] & o) >> 8 - (e - (this.bitPointer + 1 + 8));
                return t = a + s + h, this.bitPointer = this.bitPointer - (e - 8) % 8, this.bitPointer < 0 && (this.bitPointer = 8 + this.bitPointer), t
            }
            return 0
        }, this.NextMode = function() {
            return this.blockPointer > this.blocks.length - this.numErrorCorrectionCode - 2 ? 0 : this.getNextBits(4)
        }, this.getDataLength = function(e) {
            for (var t = 0;;) {
                if (e >> t == 1) break;
                t++
            }
            return this.getNextBits(qrcode.sizeOfDataLengthInfo[this.dataLengthMode][t])
        }, this.getRomanAndFigureString = function(e) {
            var t = e,
                r = 0,
                n = "",
                i = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":");
            do
                if (t > 1) {
                    r = this.getNextBits(11);
                    var o = Math.floor(r / 45),
                        a = r % 45;
                    n += i[o], n += i[a], t -= 2
                } else 1 == t && (r = this.getNextBits(6), n += i[r], t -= 1);
            while (t > 0);
            return n
        }, this.getFigureString = function(e) {
            var t = e,
                r = 0,
                n = "";
            do t >= 3 ? (r = this.getNextBits(10), 100 > r && (n += "0"), 10 > r && (n += "0"), t -= 3) : 2 == t ? (r = this.getNextBits(7), 10 > r && (n += "0"), t -= 2) : 1 == t && (r = this.getNextBits(4), t -= 1), n += r; while (t > 0);
            return n
        }, this.get8bitByteArray = function(e) {
            var t = e,
                r = 0,
                n = new Array;
            do r = this.getNextBits(8), n.push(r), t--; while (t > 0);
            return n
        }, this.getKanjiString = function(e) {
            var t = e,
                r = 0,
                n = "";
            do {
                r = getNextBits(13);
                var i = r % 192,
                    o = r / 192,
                    a = (o << 8) + i,
                    s = 0;
                s = 40956 >= a + 33088 ? a + 33088 : a + 49472, n += String.fromCharCode(s), t--
            } while (t > 0);
            return n
        }, Object.defineProperty(this, "DataByte", {
            get: function() {
                for (var e = new Array, t = 1, r = 2, n = 4, i = 8;;) {
                    var o = this.NextMode();
                    if (0 == o) {
                        if (e.length > 0) break;
                        throw "Empty data block"
                    }
                    if (o != t && o != r && o != n && o != i) throw o = guessMode(o), "Invalid mode: " + o + " in (block:" + this.blockPointer + " bit:" + this.bitPointer + ")";
                    if (dataLength = this.getDataLength(o), 1 > dataLength) throw "Invalid data length: " + dataLength;
                    switch (o) {
                        case t:
                            for (var a = this.getFigureString(dataLength), s = new Array(a.length), h = 0; h < a.length; h++) s[h] = a.charCodeAt(h);
                            e.push(s);
                            break;
                        case r:
                            for (var a = this.getRomanAndFigureString(dataLength), s = new Array(a.length), h = 0; h < a.length; h++) s[h] = a.charCodeAt(h);
                            e.push(s);
                            break;
                        case n:
                            var d = this.get8bitByteArray(dataLength);
                            e.push(d);
                            break;
                        case i:
                            var a = this.getKanjiString(dataLength);
                            e.push(a)
                    }
                }
                return e
            }
        })
    }
    GridSampler = {}, GridSampler.checkAndNudgePoints = function(e, t) {
        for (var r = qrcode.width, n = qrcode.height, i = !0, o = 0; o < t.length && i; o += 2) {
            var a = Math.floor(t[o]),
                s = Math.floor(t[o + 1]);
            if (-1 > a || a > r || -1 > s || s > n) throw "Error.checkAndNudgePoints ";
            i = !1, -1 == a ? (t[o] = 0, i = !0) : a == r && (t[o] = r - 1, i = !0), -1 == s ? (t[o + 1] = 0, i = !0) : s == n && (t[o + 1] = n - 1, i = !0)
        }
        i = !0;
        for (var o = t.length - 2; o >= 0 && i; o -= 2) {
            var a = Math.floor(t[o]),
                s = Math.floor(t[o + 1]);
            if (-1 > a || a > r || -1 > s || s > n) throw "Error.checkAndNudgePoints ";
            i = !1, -1 == a ? (t[o] = 0, i = !0) : a == r && (t[o] = r - 1, i = !0), -1 == s ? (t[o + 1] = 0, i = !0) : s == n && (t[o + 1] = n - 1, i = !0)
        }
    }, GridSampler.sampleGrid3 = function(e, t, r) {
        for (var n = new d(t), i = new Array(t << 1), o = 0; t > o; o++) {
            for (var a = i.length, s = o + .5, h = 0; a > h; h += 2) i[h] = (h >> 1) + .5, i[h + 1] = s;
            r.transformPoints1(i), GridSampler.checkAndNudgePoints(e, i);
            try {
                for (var h = 0; a > h; h += 2) {
                    var w = 4 * Math.floor(i[h]) + Math.floor(i[h + 1]) * qrcode.width * 4,
                        c = e[Math.floor(i[h]) + qrcode.width * Math.floor(i[h + 1])];
                    qrcode.imagedata.data[w] = c ? 255 : 0, qrcode.imagedata.data[w + 1] = c ? 255 : 0, qrcode.imagedata.data[w + 2] = 0, qrcode.imagedata.data[w + 3] = 255, c && n.set_Renamed(h >> 1, o)
                }
            } catch (f) {
                throw "Error.checkAndNudgePoints"
            }
        }
        return n
    }, GridSampler.sampleGridx = function(e, t, r, n, o, a, s, h, d, w, c, f, u, l, g, v, m, p) {
        var y = i.quadrilateralToQuadrilateral(r, n, o, a, s, h, d, w, c, f, u, l, g, v, m, p);
        return GridSampler.sampleGrid3(e, t, y)
    }, r.VERSION_DECODE_INFO = new Array(31892, 34236, 39577, 42195, 48118, 51042, 55367, 58893, 63784, 68472, 70749, 76311, 79154, 84390, 87683, 92361, 96236, 102084, 102881, 110507, 110734, 117786, 119615, 126325, 127568, 133589, 136944, 141498, 145311, 150283, 152622, 158308, 161089, 167017), r.VERSIONS = n(), r.getVersionForNumber = function(e) {
        if (1 > e || e > 40) throw "ArgumentException";
        return r.VERSIONS[e - 1]
    }, r.getProvisionalVersionForDimension = function(e) {
        if (e % 4 != 1) throw "Error getProvisionalVersionForDimension";
        try {
            return r.getVersionForNumber(e - 17 >> 2)
        } catch (t) {
            throw "Error getVersionForNumber"
        }
    }, r.decodeVersionInformation = function(e) {
        for (var t = 4294967295, n = 0, i = 0; i < r.VERSION_DECODE_INFO.length; i++) {
            var o = r.VERSION_DECODE_INFO[i];
            if (o == e) return this.getVersionForNumber(i + 7);
            var a = s.numBitsDiffering(e, o);
            t > a && (n = i + 7, t = a)
        }
        return 3 >= t ? this.getVersionForNumber(n) : null
    }, i.quadrilateralToQuadrilateral = function(e, t, r, n, i, o, a, s, h, d, w, c, f, u, l, g) {
        var v = this.quadrilateralToSquare(e, t, r, n, i, o, a, s),
            m = this.squareToQuadrilateral(h, d, w, c, f, u, l, g);
        return m.times(v)
    }, i.squareToQuadrilateral = function(e, t, r, n, o, a, s, h) {
        return dy2 = h - a, dy3 = t - n + a - h, 0 == dy2 && 0 == dy3 ? new i(r - e, o - r, e, n - t, a - n, t, 0, 0, 1) : (dx1 = r - o, dx2 = s - o, dx3 = e - r + o - s, dy1 = n - a, denominator = dx1 * dy2 - dx2 * dy1, a13 = (dx3 * dy2 - dx2 * dy3) / denominator, a23 = (dx1 * dy3 - dx3 * dy1) / denominator, new i(r - e + a13 * r, s - e + a23 * s, e, n - t + a13 * n, h - t + a23 * h, t, a13, a23, 1))
    }, i.quadrilateralToSquare = function(e, t, r, n, i, o, a, s) {
        return this.squareToQuadrilateral(e, t, r, n, i, o, a, s).buildAdjoint()
    };
    var B = 21522,
        F = new Array(new Array(21522, 0), new Array(20773, 1), new Array(24188, 2), new Array(23371, 3), new Array(17913, 4), new Array(16590, 5), new Array(20375, 6), new Array(19104, 7), new Array(30660, 8), new Array(29427, 9), new Array(32170, 10), new Array(30877, 11), new Array(26159, 12), new Array(25368, 13), new Array(27713, 14), new Array(26998, 15), new Array(5769, 16), new Array(5054, 17), new Array(7399, 18), new Array(6608, 19), new Array(1890, 20), new Array(597, 21), new Array(3340, 22), new Array(2107, 23), new Array(13663, 24), new Array(12392, 25), new Array(16177, 26), new Array(14854, 27), new Array(9396, 28), new Array(8579, 29), new Array(11994, 30), new Array(11245, 31)),
        I = new Array(0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4);
    s.numBitsDiffering = function(e, t) {
        return e ^= t, I[15 & e] + I[15 & q(e, 4)] + I[15 & q(e, 8)] + I[15 & q(e, 12)] + I[15 & q(e, 16)] + I[15 & q(e, 20)] + I[15 & q(e, 24)] + I[15 & q(e, 28)]
    }, s.decodeFormatInformation = function(e) {
        var t = s.doDecodeFormatInformation(e);
        return null != t ? t : s.doDecodeFormatInformation(e ^ B)
    }, s.doDecodeFormatInformation = function(e) {
        for (var t = 4294967295, r = 0, n = 0; n < F.length; n++) {
            var i = F[n],
                o = i[0];
            if (o == e) return new s(i[1]);
            var a = this.numBitsDiffering(e, o);
            t > a && (r = i[1], t = a)
        }
        return 3 >= t ? new s(r) : null
    }, h.forBits = function(e) {
        if (0 > e || e >= z.length) throw "ArgumentException";
        return z[e]
    };
    var O = new h(0, 1, "L"),
        T = new h(1, 0, "M"),
        N = new h(2, 3, "Q"),
        R = new h(3, 2, "H"),
        z = new Array(T, O, R, N);
    w.getDataBlocks = function(e, t, r) {
        if (e.length != t.TotalCodewords) throw "ArgumentException";
        for (var n = t.getECBlocksForLevel(r), i = 0, o = n.getECBlocks(), a = 0; a < o.length; a++) i += o[a].Count;
        for (var s = new Array(i), h = 0, d = 0; d < o.length; d++)
            for (var c = o[d], a = 0; a < c.Count; a++) {
                var f = c.DataCodewords,
                    u = n.ECCodewordsPerBlock + f;
                s[h++] = new w(f, new Array(u))
            }
        for (var l = s[0].codewords.length, g = s.length - 1; g >= 0;) {
            var v = s[g].codewords.length;
            if (v == l) break;
            g--
        }
        g++;
        for (var m = l - n.ECCodewordsPerBlock, p = 0, a = 0; m > a; a++)
            for (var d = 0; h > d; d++) s[d].codewords[a] = e[p++];
        for (var d = g; h > d; d++) s[d].codewords[m] = e[p++];
        for (var y = s[0].codewords.length, a = m; y > a; a++)
            for (var d = 0; h > d; d++) {
                var b = g > d ? a : a + 1;
                s[d].codewords[b] = e[p++]
            }
        return s
    }, DataMask = {}, DataMask.forReference = function(e) {
        if (0 > e || e > 7) throw "System.ArgumentException";
        return DataMask.DATA_MASKS[e]
    }, DataMask.DATA_MASKS = new Array(new f, new u, new l, new g, new v, new m, new y, new b), A.QR_CODE_FIELD = new A(285), A.DATA_MATRIX_FIELD = new A(301), A.addOrSubtract = function(e, t) {
        return e ^ t
    }, Decoder = {}, Decoder.rsDecoder = new C(A.QR_CODE_FIELD), Decoder.correctErrors = function(e, t) {
        for (var r = e.length, n = new Array(r), i = 0; r > i; i++) n[i] = 255 & e[i];
        var o = e.length - t;
        try {
            Decoder.rsDecoder.decode(n, o)
        } catch (a) {
            throw a
        }
        for (var i = 0; t > i; i++) e[i] = n[i]
    }, Decoder.decode = function(e) {
        for (var t = new c(e), r = t.readVersion(), n = t.readFormatInformation().ErrorCorrectionLevel, i = t.readCodewords(), o = w.getDataBlocks(i, r, n), a = 0, s = 0; s < o.length; s++) a += o[s].NumDataCodewords;
        for (var h = new Array(a), d = 0, f = 0; f < o.length; f++) {
            var u = o[f],
                l = u.Codewords,
                g = u.NumDataCodewords;
            Decoder.correctErrors(l, g);
            for (var s = 0; g > s; s++) h[d++] = l[s]
        }
        var v = new x(h, r.VersionNumber, n.Bits);
        return v
    }, qrcode = {}, qrcode.imagedata = null, qrcode.width = 0, qrcode.height = 0, qrcode.qrCodeSymbol = null, qrcode.debug = !1, qrcode.maxImgSize = 1048576, qrcode.canvasElement = null, qrcode.sizeOfDataLengthInfo = [
        [10, 9, 8, 8],
        [12, 11, 16, 10],
        [14, 13, 16, 12]
    ], qrcode.callback = null, qrcode.setCanvasElement = function(e) {
        qrcode.canvasElement = e
    }, qrcode.decode = function(e, t) {
        console.log('decode');
        if (0 == arguments.length) {
            var r = qrcode.canvasElement,
                n = r.getContext("2d");
            return qrcode.width = r.width, qrcode.height = r.height, qrcode.imagedata = n.getImageData(0, 0, qrcode.width, qrcode.height), qrcode.result = qrcode.process(n), null != qrcode.callback && qrcode.callback(qrcode.result), qrcode.result
        }
        var i = new Image;
        i.onload = function() {
            var e = document.createElement("canvas"),
                r = e.getContext("2d"),
                n = i.height,
                o = i.width;
            if (i.width * i.height > qrcode.maxImgSize) {
                var a = i.width / i.height;
                n = Math.sqrt(qrcode.maxImgSize / a), o = a * n
            }
            e.width = o, e.height = n, r.drawImage(i, 0, 0, e.width, e.height), qrcode.width = e.width, qrcode.height = e.height;
            try {
                qrcode.imagedata = r.getImageData(0, 0, e.width, e.height)
            } catch (s) {
                return qrcode.result = "Cross domain Error", null != qrcode.callback && qrcode.callback(qrcode.result), void 0
            }
            try {
                qrcode.result = qrcode.process(r), t(null, qrcode.result)
            } catch (s) {
                qrcode.result = "Error decoding QR Code from Image", t(new Error("Error decoding QR Code from Image"))
            }
            null != qrcode.callback && qrcode.callback(qrcode.result)
        }, i.src = e
    }, qrcode.isUrl = function(e) {
        var t = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        return t.test(e)
    }, qrcode.decode_url = function(e) {
        var t = "";
        try {
            t = escape(e)
        } catch (r) {
            t = e
        }
        var n = "";
        try {
            n = decodeURIComponent(t)
        } catch (r) {
            n = t
        }
        return n
    }, qrcode.decode_utf8 = function(e) {
        return qrcode.isUrl(e) ? qrcode.decode_url(e) : e
    }, qrcode.process = function(e) {
        var t = ((new Date).getTime(), qrcode.grayScaleToBitmap(qrcode.grayscale()));
        if (qrcode.debug) {
            for (var r = 0; r < qrcode.height; r++)
                for (var n = 0; n < qrcode.width; n++) {
                    var i = 4 * n + r * qrcode.width * 4;
                    qrcode.imagedata.data[i] = t[n + r * qrcode.width] ? 0 : 0, qrcode.imagedata.data[i + 1] = t[n + r * qrcode.width] ? 0 : 0, qrcode.imagedata.data[i + 2] = t[n + r * qrcode.width] ? 255 : 0
                }
            e.putImageData(qrcode.imagedata, 0, 0)
        }
        var o = new a(t),
            s = o.detect();
        qrcode.debug && e.putImageData(qrcode.imagedata, 0, 0);
        for (var h = Decoder.decode(s.bits), d = h.DataByte, w = "", c = 0; c < d.length; c++)
            for (var f = 0; f < d[c].length; f++) w += String.fromCharCode(d[c][f]);
        (new Date).getTime();
        return qrcode.decode_utf8(w)
    }, qrcode.getPixel = function(e, t) {
        if (qrcode.width < e) throw "point error";
        if (qrcode.height < t) throw "point error";
        return point = 4 * e + t * qrcode.width * 4, p = (33 * qrcode.imagedata.data[point] + 34 * qrcode.imagedata.data[point + 1] + 33 * qrcode.imagedata.data[point + 2]) / 100
    }, qrcode.binarize = function(e) {
        for (var t = new Array(qrcode.width * qrcode.height), r = 0; r < qrcode.height; r++)
            for (var n = 0; n < qrcode.width; n++) {
                var i = qrcode.getPixel(n, r);
                t[n + r * qrcode.width] = e >= i ? !0 : !1
            }
        return t
    }, qrcode.getMiddleBrightnessPerArea = function(e) {
        for (var t = 4, r = Math.floor(qrcode.width / t), n = Math.floor(qrcode.height / t), i = new Array(t), o = 0; t > o; o++) {
            i[o] = new Array(t);
            for (var a = 0; t > a; a++) i[o][a] = new Array(0, 0)
        }
        for (var s = 0; t > s; s++)
            for (var h = 0; t > h; h++) {
                i[h][s][0] = 255;
                for (var d = 0; n > d; d++)
                    for (var w = 0; r > w; w++) {
                        var c = e[r * h + w + (n * s + d) * qrcode.width];
                        c < i[h][s][0] && (i[h][s][0] = c), c > i[h][s][1] && (i[h][s][1] = c)
                    }
            }
        for (var f = new Array(t), u = 0; t > u; u++) f[u] = new Array(t);
        for (var s = 0; t > s; s++)
            for (var h = 0; t > h; h++) f[h][s] = Math.floor((i[h][s][0] + i[h][s][1]) / 2);
        return f
    }, qrcode.grayScaleToBitmap = function(e) {
        for (var t = qrcode.getMiddleBrightnessPerArea(e), r = t.length, n = Math.floor(qrcode.width / r), i = Math.floor(qrcode.height / r), o = new Array(qrcode.height * qrcode.width), a = 0; r > a; a++)
            for (var s = 0; r > s; s++)
                for (var h = 0; i > h; h++)
                    for (var d = 0; n > d; d++) o[n * s + d + (i * a + h) * qrcode.width] = e[n * s + d + (i * a + h) * qrcode.width] < t[s][a] ? !0 : !1;
        return o
    }, qrcode.grayscale = function() {
        for (var e = new Array(qrcode.width * qrcode.height), t = 0; t < qrcode.height; t++)
            for (var r = 0; r < qrcode.width; r++) {
                var n = qrcode.getPixel(r, t);
                e[r + t * qrcode.width] = n
            }
        return e
    }, Array.prototype.remove = function(e, t) {
        var r = this.slice((t || e) + 1 || this.length);
        return this.length = 0 > e ? this.length + e : e, this.push.apply(this, r)
    };
    var V = 3,
        L = 57,
        _ = 8,
        X = 2;
    return qrcode.orderBestPatterns = function(e) {
        function t(e, t) {
            return xDiff = e.X - t.X, yDiff = e.Y - t.Y, Math.sqrt(xDiff * xDiff + yDiff * yDiff)
        }

        function r(e, t, r) {
            var n = t.x,
                i = t.y;
            return (r.x - n) * (e.y - i) - (r.y - i) * (e.x - n)
        }
        var n, i, o, a = t(e[0], e[1]),
            s = t(e[1], e[2]),
            h = t(e[0], e[2]);
        if (s >= a && s >= h ? (i = e[0], n = e[1], o = e[2]) : h >= s && h >= a ? (i = e[1], n = e[0], o = e[2]) : (i = e[2], n = e[0], o = e[1]), r(n, i, o) < 0) {
            var d = n;
            n = o, o = d
        }
        e[0] = n, e[1] = i, e[2] = o
    }, qrcode
}),
function(e, t) {
    "function" == typeof define && define.amd ? define(["qrcode"], t) : "object" == typeof exports ? module.exports = t(require("../build/qrcode")) : e.QCodeDecoder = t(qrcode)
}(this, function(e) {
    "use strict";

    function t() {
        return this instanceof t ? (this.timerCapture = null, this.canvasElem = null, this.stream = null, this.videoConstraints = {
            video: !0,
            audio: !1
        }, void 0) : new t
    }
    return t.prototype.isCanvasSupported = function() {
        var e = document.createElement("canvas");
        return !(!e.getContext || !e.getContext("2d"))
    }, t.prototype.hasGetUserMedia = function() {
        return navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia, !!navigator.getUserMedia
    }, t.prototype._prepareCanvas = function(t) {
        return this.canvasElem || (this.canvasElem = document.createElement("canvas"), this.canvasElem.style.width = t.videoWidth + "px", this.canvasElem.style.height = t.videoHeight + "px", this.canvasElem.width = t.videoWidth, this.canvasElem.height = t.videoHeight), e.setCanvasElement(this.canvasElem), this
    }, t.prototype._captureToCanvas = function(t, r, n) {
        if (this.timerCapture && clearTimeout(this.timerCapture), t.videoWidth && t.videoHeight) {
            this.canvasElem || this._prepareCanvas(t);
            var i = this.canvasElem.getContext("2d");
            i.clearRect(0, 0, t.videoWidth, t.videoHeight), i.drawImage(t, 0, 0, t.videoWidth, t.videoHeight);
            try {
                if (r(null, e.decode()), n) return
            } catch (o) {
                "Couldn't find enough finder patterns" !== o && r(new Error(o))
            }
        }
        this.timerCapture = setTimeout(function() {
            this._captureToCanvas.call(this, t, r, n)
        }.bind(this), 500)
    }, t.prototype.decodeFromCamera = function(e, t, r) {
        var n = (this.stop(), this);
        return this.hasGetUserMedia() || t(new Error("Couldn't get video from camera")), navigator.getUserMedia(this.videoConstraints, function(i) {
            e.src = window.URL.createObjectURL(i), n.videoElem = e, n.stream = i, n.videoDimensions = !1, setTimeout(function() {
                n._captureToCanvas.call(n, e, t, r)
            }, 500)
        }, t), this
    }, t.prototype.decodeFromVideo = function(e, t, r) {
        return setTimeout(function() {
            this._captureToCanvas.call(this, e, t, r)
        }.bind(this), 500), this
    }, t.prototype.decodeFromImage = function(t, r) {
        if (+t.nodeType > 0 && !t.src) throw new Error("The ImageElement must contain a src");
        return t = t.src ? t.src : t, e.decode(t, r), this
    }, t.prototype.stop = function() {
        return this.stream && (this.stream.stop(), this.stream = void 0), this.timerCapture && (clearTimeout(this.timerCapture), this.timerCapture = void 0), this
    }, t.prototype.setSourceId = function(e) {
        return this.videoConstraints.video = e ? {
            optional: [{
                sourceId: e
            }]
        } : !0, this
    }, t.prototype.getVideoSources = function(e) {
        var t = [];
        return MediaStreamTrack && MediaStreamTrack.getSources ? (MediaStreamTrack.getSources(function(r) {
            r.forEach(function(e) {
                "video" === e.kind && t.push(e)
            }), e(null, t)
        }), this) : e(new Error("Current browser doest not support MediaStreamTrack.getSources"))
    }, t
});